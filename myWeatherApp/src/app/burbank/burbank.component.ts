import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  imagelink: string
  constructor(private _httpService: HttpService) {
    this.imagelink = '/../../assets/burbank.jpg' 
   }
   obj;
  ngOnInit() {
    var city_name = "burbank";
    let obsv = this._httpService.getcity(city_name);
    obsv.subscribe(data => {
      this.obj = data
      console.log(this.obj)
      console.log(data)
    })
  }

}
