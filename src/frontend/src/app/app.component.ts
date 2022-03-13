import {Component, OnInit} from '@angular/core';
import {WeatherapiService} from "../services/weatherapi.service";
import {WeatherData} from "../model/weatherData";
import {ChartData} from "./chartData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chartData?: ChartData[];
  _weatherapiService: WeatherapiService;
  filter: number = 100000;

  // Chart
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  timeline: boolean = true;

  constructor(weatherapiService: WeatherapiService) {
    this._weatherapiService = weatherapiService;
  }

  ngOnInit(): void {
    this._loadData();
  }

  _loadData(): void {
    this._weatherapiService.getWeatherData(this.filter).subscribe(value => {
      var tempData: ChartData = {
        name: "Temperature",
        series: []
      };

      var humidityData: ChartData = {
        name: "Humidity",
        series: []
      };

      value.forEach(d => tempData.series.push({ value: d.temperature, name: d.timestamp}));
      value.forEach(d => humidityData.series.push({ value: d.humidity, name: d.timestamp}));
      this.chartData = [
        tempData,
        humidityData
      ]
    });
  }
}
