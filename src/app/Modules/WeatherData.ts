import { IForecast } from "./Forecast";

   export interface IWeatherData {
    id: number;
    city: string;
    forecast: IForecast[];
}
export interface IWeatherCityData {
    id: number;
    city: string;
   
}