import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../Services/weather-api.service';
import { CommonModule } from '@angular/common';
import { IWeatherCityData, IWeatherData } from '../../Modules/WeatherData';
import { IForecast } from '../../Modules/Forecast';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
})
export class WeatherListComponent implements OnInit {
  weatherList: IWeatherData[] = [];
  latestWeatherList: { city: string; forecast: IForecast[] }[] = [];
  useCelsius: boolean = true; // Default to Celsius
  selectedDate: string = ''; // Holds the selected date for filtering
  constructor(private weatherService: WeatherApiService) { }

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe({
      next: (data) => {
        this.weatherList = data;
        this.allWeatherData(this.weatherList);
      },
      error: (error) => console.error('Error:', error),
    });
  }
  toggleUnit(): void {
    this.useCelsius = !this.useCelsius;
  }

  filterByDate(): void {
    if (!this.selectedDate) {
      this.allWeatherData(this.weatherList);
      return;
    }
    this.latestWeatherList = this.weatherList
      .map((city) => ({
        city: city.city,
        forecast: city.forecast.filter(
          (forecast) => forecast.date === this.selectedDate
        ),
      }))
      .filter((city) => city.forecast.length > 0); // Remove cities with no matching forecasts
  }

  allWeatherData(weatherList: IWeatherData[]): void {
    // Show the latest forecast by default
    this.latestWeatherList = weatherList.map((city) => ({
      city: city.city,
      forecast: [city.forecast[city.forecast.length - 1]],
    }));
  }

}
