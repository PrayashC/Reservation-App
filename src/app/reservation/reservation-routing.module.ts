import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CheckComponent } from './check/check.component';
import { CancelComponent } from './cancel/cancel.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { SuccessfulComponent } from './successful/successful.component';

const routes: Routes = [
  {path: "reservation/create", component: CreateComponent},
  {path: "reservation/check", component: CheckComponent},
  {path: "reservation/cancel", component: CancelComponent},
  {path: "reservation/reschedule", component: RescheduleComponent},
  {path: "reservation/successful", component: SuccessfulComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
