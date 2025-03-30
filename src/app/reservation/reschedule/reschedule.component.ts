import { Component } from '@angular/core';
import { Reservations } from '../reservation';
import { RserviceService } from '../rservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent {

  resvDetials: Reservations = {
    id: "",
    name: "",
    mobile: "",
    date: new Date().toLocaleString(),
    time: ""
  };

  constructor(private router: Router, private rservice: RserviceService){}

  resvNum="";

  ngOnInit(): void {
  }

  mouseOut(){
    this.getById(+this.resvNum);
    console.log(+this.resvNum);
  }

  getById(resvNum: number) {
    this.rservice.getById(resvNum).subscribe((data) => {
      this.resvDetials = data;
      console.log(this.resvDetials)
    })
  }

  update(reschedule : {value: any;}):void{
    this.resvDetials.date = reschedule.value.date;
    this.resvDetials.time = reschedule.value.time;
    this.rservice.update(this.resvDetials).subscribe({
      next:(data) => {
        this.router.navigate(["/reservation/check"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
