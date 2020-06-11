import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http: HttpClient) {
  }
  getLatLong<T>(country: string, state: string, city: string): Observable<any> {
    let location = city +","+state+","+country;
    return this.http.get(
      'https://www.mapquestapi.com/geocoding/v1/address?key=AK95hhmfNsD8KT9a9u1b0jNaQjJqqGsC&location='+location
    );
  }
}
