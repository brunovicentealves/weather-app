import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 private apikey = '3a929a8e387d753611a87759f226c2f9'
  constructor(private http:HttpClient ) { }


  getweatherDatas(city:String): Observable<any>{

    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apikey}`,{})
  }
}
