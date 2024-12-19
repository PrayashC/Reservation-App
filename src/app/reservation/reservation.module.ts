import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { CreateComponent } from './create/create.component';
import { CheckComponent } from './check/check.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { CancelComponent } from './cancel/cancel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessfulComponent } from './successful/successful.component';


@NgModule({
  declarations: [
    CreateComponent,
    CheckComponent,
    RescheduleComponent,
    CancelComponent,
    SuccessfulComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
