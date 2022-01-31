import { Injectable } from '@angular/core';
import {WeatherData} from "../model/weatherData";

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor() { }

  public getWeatherData(): WeatherData {
    const data = new WeatherData();
    data.place = "Test-Place";

    return data;
  }
}
