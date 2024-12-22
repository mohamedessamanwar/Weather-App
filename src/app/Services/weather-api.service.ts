import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherData } from '../Modules/WeatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  baseUrl:string = 'http://localhost:4454/'
  constructor(private http:HttpClient) { }
  getForecast(): Observable<IWeatherData[]> {
       return this.http.get<IWeatherData[]>(this.baseUrl + 'forecast');
  }
  getCityForecast(id:number): Observable<IWeatherData> {
    return this.http.get<IWeatherData>(`${this.baseUrl}cityForecast/${id}`);
}
}
