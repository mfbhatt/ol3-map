import { Component, OnInit } from '@angular/core';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  map: Map;
  constructor() {
  }

  ngOnInit() {

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [8595534.923238782, 3326615.907999155],
        zoom: 14
      })
    });

    this.map.on("click",(e) => {
      console.log(e);
    })
  }
}
