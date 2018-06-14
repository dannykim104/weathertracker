import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  imagelink: string
  constructor(private _httpService: HttpService) {
    this.imagelink = '/../../assets/dallas.jpg' 
   }
   obj;
  ngOnInit() {
    var city_name = "dallas";
    let obsv = this._httpService.getcity(city_name);
    obsv.subscribe(data => {
      this.obj = data
      console.log(this.obj)
      console.log(data)
    })
  }

}
