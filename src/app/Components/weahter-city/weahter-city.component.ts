import { Component, OnInit } from '@angular/core';
import { IWeatherCityData, IWeatherData } from '../../Modules/WeatherData';
import { WeatherApiService } from '../../Services/weather-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-weahter-city',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './weahter-city.component.html',
  styleUrl: './weahter-city.component.css'
})
export class WeahterCityComponent  implements OnInit {
    weatherList: IWeatherData[] = [];
     cityIdList: IWeatherCityData[] = [];
     CityId: number = 0;
     WeatherObj!: IWeatherData 
     isCitySelected: boolean = false;
  constructor(private weatherService: WeatherApiService) { }
  ngOnInit(): void {
    this.weatherService.getForecast().subscribe({
      next: (data) => {
        this.weatherList = data;
        this.cityIdList = this.weatherList.map((city) => ({ id: city.id, city: city.city }));
      },
      error: (error) => console.error('Error:', error),
    });
  }
  filterByCityId(): void {
     this.isCitySelected = true; 
     this.weatherService.getCityForecast(this.CityId).subscribe({
       next: (data:IWeatherData) => {
         this.WeatherObj = data; 
     } 
    })
  }
}
