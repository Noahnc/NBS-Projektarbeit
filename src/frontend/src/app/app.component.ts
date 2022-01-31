import {Component, OnInit} from '@angular/core';
import {WeatherapiService} from "../services/weatherapi.service";
import {WeatherData} from "../model/weatherData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherui';
  weatherData?: WeatherData;

  constructor(weatherapiService: WeatherapiService) {
    this.weatherData = weatherapiService.getWeatherData();
  }

  ngOnInit(): void {
  }
}
