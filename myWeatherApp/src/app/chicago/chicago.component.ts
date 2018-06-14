import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  imagelink: string
  constructor(private _httpService: HttpService) {
      this.imagelink = '/../../assets/chicago.jpg' 
   }
   obj;
  ngOnInit() {
    var city_name = "chicago";
      let obsv = this._httpService.getcity(city_name);
      obsv.subscribe(data => {
        this.obj = data
        console.log(this.obj)
        console.log(data)
      })
  }

}
