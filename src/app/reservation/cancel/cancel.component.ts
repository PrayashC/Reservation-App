import { Component } from '@angular/core';
import { Reservations } from '../reservation';
import { RserviceService } from '../rservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent {
  resvDetials: Reservations[] = [];
  resvNum="";
  confirm = false;
  cancelled = false;
  notExist = false;
  islock = false;
  ngOnInit(): void {
  }

  constructor(private rservice: RserviceService, private route: Router){}

  onsubmit(cancel : {value: any;}):void{
    this.resvNum = cancel.value.resvNum;
    this.get(this.resvNum);
    this.confirm = true;
    this.islock = true;
  }

  get(id: string) {
    this.rservice.get().subscribe((data) => {
      this.resvDetials = data.filter(a => a.id == id)
      if(this.resvDetials.length === 0){
        this.notExist = true;
      }
    })
  }

  delete(id: string){
    this.rservice.delete(id).subscribe((data) => {
      this.route.navigate(["/reservation/cancel"]);
    })
  }

  confirmCancel(){
    this.delete(this.resvNum);
    this.cancelled = true;
    this.resvNum="";
  }

  refreshPage() {
    location.reload();
  }
}
