import { Component, OnInit } from '@angular/core';

import { Reservations } from '../reservation';
import { RserviceService } from '../rservice.service';
import { Router } from '@angular/router';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  ngOnInit(): void {
  }

  resvDetials: Reservations = {
    id: "",
    name: "",
    mobile: "",
    date: new Date().toLocaleString(),
    time: ""
  };

  constructor(private rservice: RserviceService, private router: Router){}

  f_name = "";
  l_name = "";
  submitted = false;

  onsubmit(createForm : {value: any;}):void{
    this.generateId();
    this.f_name = createForm.value.f_name;
    this.l_name = createForm.value.l_name;
    this.nameEntry();
    this.resvDetials.mobile = createForm.value.mobile;
    this.resvDetials.date = createForm.value.date;
    this.resvDetials.time = createForm.value.time;
    this.create();
    this.submitted=true;
  }

  generateId(){
    this.resvDetials.id = String(this.getRandomInt(1000, 9999));
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  nameEntry(){
    this.resvDetials.name = this.f_name + " " + this.l_name;
  }

  create(){
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
