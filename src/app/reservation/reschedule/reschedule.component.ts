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
  resvNum="";

  ngOnInit(): void {
  }

  constructor(private router: Router, private rservice: RserviceService){}

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

  // onsubmit(){
  //   this.update()
  // }

  update(checkForm : {value: any;}):void{
    this.resvDetials.date = checkForm.value.date;
    this.resvDetials.time = checkForm.value.time;
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
