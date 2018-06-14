import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  imagelink: string
  constructor(private _httpService: HttpService) {
      this.imagelink = '/../../assets/seattle.jpg' 
   }
  obj;
  ngOnInit() {
      var city_name = "seattle";
      let obsv = this._httpService.getcity(city_name);
      obsv.subscribe(data => {
        this.obj = data
        console.log(this.obj)
        console.log(data)
      })
        
  }

}
