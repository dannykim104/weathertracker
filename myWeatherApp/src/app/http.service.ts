import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getcity(cityname){
      return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&APPID=f415f672f8b9c525b8d17c87886a8df2`)
  }

}
