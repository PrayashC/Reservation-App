import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservation';
  constructor(private router: Router){}

  toCreate(){
    this.router.navigate(["reservation/create"])
  }

  toCheck(){
    this.router.navigate(["reservation/check"]);
  }

  toReschedule(){
    this.router.navigate(["reservation/reschedule"]);
  }

  toCancel(){
    this.router.navigate(["reservation/cancel"]);
  }
}
