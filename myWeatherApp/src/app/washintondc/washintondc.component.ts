import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-washintondc',
  templateUrl: './washintondc.component.html',
  styleUrls: ['./washintondc.component.css']
})
export class WashintondcComponent implements OnInit {
  imagelink: string
  constructor(private _httpService: HttpService) {
      this.imagelink = '/../../assets/washingtondc.jpg'
   }
   obj;
  ngOnInit() {
    var city_name = "washington dc.";
    let obsv = this._httpService.getcity(city_name);
    obsv.subscribe(data => {
      this.obj = data
      console.log(this.obj)
      console.log(data)
    })
  }

}
