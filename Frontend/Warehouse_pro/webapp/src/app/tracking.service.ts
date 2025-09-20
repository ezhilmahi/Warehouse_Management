import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tracking } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  private apiUrl = 'http://localhost:8080/api/tracking/find';

  constructor(private http: HttpClient) {}

  findTracking(trackingNumber: string): Observable<Tracking> {
    return this.http.get<Tracking>(`${this.apiUrl}?trackingNumber=${trackingNumber}`);
  }
}
