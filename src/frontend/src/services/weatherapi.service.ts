import { Injectable } from '@angular/core';
import {WeatherData} from "../model/weatherData";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  private baseUrl: string = 'https://api-projekt-nbs.managed-network.ch/api/WeatherForecast/weather';

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getWeatherData(limit: number): Observable<WeatherData[]> {
    return this.httpClient.get<WeatherData[]>(this.baseUrl + '?limit=' + limit);
  }
}
