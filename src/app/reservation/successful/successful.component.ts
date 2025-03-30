import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservations } from '../reservation';
import { RserviceService } from '../rservice.service';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent {

  allResv: Reservations[] = [];
  generatedId = "";
  resvmsg = "";

  ngOnInit(): void {
    this.get();
  }

  constructor(private rservice: RserviceService, private router: Router){}

  get() {
    this.rservice.get().subscribe((data) => {
      this.allResv = data;
      this.generatedId = this.allResv[this.allResv.length-1].id;
      this.resvmsg = "Your reservation is successful, please note your Reservation Number: "+ this.generatedId ;
    })
  }
  
  

  toCreate(){
    this.router.navigate(["reservation/create"])
  }
}
