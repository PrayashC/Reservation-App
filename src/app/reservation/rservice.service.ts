import { Injectable } from '@angular/core';
import { Reservations } from './reservation';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RserviceService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Reservations[]>(`http://localhost:3000/reservations`);
  }

  create(payload: Reservations) {
    return this.http.post<Reservations>(`http://localhost:3000/reservations`, payload);
  }

  getById(id: number) {
    return this.http.get<Reservations>(`http://localhost:3000/reservations/${id}`);
  }

  update(payload:Reservations) {
    return this.http.put<Reservations>(`http://localhost:3000/reservations/${payload.id}`, payload);
  }

  delete(id:string) {
    return this.http.delete<Reservations>(`http://localhost:3000/reservations/${id}`);
  }
}
