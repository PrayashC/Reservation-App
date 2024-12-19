import { Component } from '@angular/core';
import { RserviceService } from '../rservice.service';
import { Reservations } from '../reservation';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {

  allResv: Reservations[] = [];
  resvNum="";
  notExist = false;

  ngOnInit(): void {
  }

  constructor(private rservice: RserviceService){}

  onsubmit(checkForm : {value: any;}):void{
    this.notExist = false;
    let resvNum = checkForm.value.resvNum;
    this.get(resvNum);
  }

  get(resvNum: string) {
    this.rservice.get().subscribe((data) => {
      this.allResv = data.filter(a => a.id == resvNum);
      if(this.allResv.length === 0){
        this.notExist = true;
      }
    })
  }
}
