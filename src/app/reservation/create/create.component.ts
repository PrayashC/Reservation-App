import { Component, OnInit } from '@angular/core';

import { Reservations } from '../reservation';
import { RserviceService } from '../rservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  ngOnInit(): void {
  }

  min = 0;
  max = 0;

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generate(){
    this.resvDetials.id = String(this.getRandomInt(1000, 9999));
  }

  f_name = "";
  l_name = "";

  nameEntry(){
    this.resvDetials.name = this.f_name + " " + this.l_name;
  }

  resvDetials: Reservations = {
    id: "",
    name: "",
    mobile: "",
    date: new Date().toLocaleString(),
    time: ""
  };

  constructor(private rservice: RserviceService, private router: Router){}

  create(){
    this.generate();
    this.nameEntry();
    this.rservice.create(this.resvDetials).subscribe({
      next: (data) => {
        this.router.navigate(["reservation/successful"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  


}
