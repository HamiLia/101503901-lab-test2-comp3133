import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  // Get all launches
  getAllLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  // Filter launches by year
  getLaunchesByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}?launch_year=${year}`);
  }

  // Get single launch by flight number
  getLaunchById(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${flightNumber}`);
  }
}
