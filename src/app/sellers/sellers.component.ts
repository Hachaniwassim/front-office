import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { pagesDTO } from '../models/dto/pagesDTO';
import { RevendeurService } from '../_services/page.service';
import { SellersAddComponent } from './sellers-add/sellers-add.component';
declare const L: any;

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {
  pageInfos: any = [];

  constructor(private revendeursService: RevendeurService, private dialog : MatDialog) { }

  ngOnInit() {

    this.getPageInfo();


    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 4.9);
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 20,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);
      L.marker([40.733235, 8.5467447]).addTo(mymap);
      L.marker([45.4842277, 9.2012376]).addTo(mymap);
      L.marker([44.7115622, 10.6027584]).addTo(mymap);
      L.marker([44.6517905, 10.8603544]).addTo(mymap);
      L.marker([41.8933203, 12.4829321]).addTo(mymap);
      L.marker([39.6205476, 16.5174167]).addTo(mymap);
      L.marker([39.3019161, 16.253962]).addTo(mymap);
      L.marker([38.690483, 16.1096073]).addTo(mymap);
      L.marker([37.775408, -122.413682]).addTo(mymap);
      L.marker([36.88944861606192, 15.071786913047031]).addTo(mymap);
      L.marker([45.53706963404534, 9.231483441664595]).addTo(mymap);
      L.marker([38.07088908116267, 14.6369367818905992]).addTo(mymap);
      L.marker([38.11987985169998, 13.293733400752787]).addTo(mymap);
      L.marker([38.07098621307315, 14.637001155410035]).addTo(mymap);
      L.marker([45.48721938143185, 9.194499897971369]).addTo(mymap);
      L.marker([39.62005806247643, 16.51710124196179]).addTo(mymap);
      L.marker([38.676351716613816, 16.09830028056813]).addTo(mymap);
      L.marker([38.11011293637737, 15.648348526575809]).addTo(mymap);
      L.marker([37.525825663689716, 15.096592641900493]).addTo(mymap);
      L.marker([37.775408, -122.413682]).addTo(mymap);
      L.marker([37.775408, -122.413682]).addTo(mymap);
      L.marker([37.775408, -122.413682]).addTo(mymap);


    });
    this.watchPosition();
  }
  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }



  getPageInfo() {

    this.revendeursService.getAllPagesByEntreprise()
      .subscribe((res: any) => {
        this.pageInfos = res[0];
        console.log("==========================> test", this.pageInfos)

      });
  }



  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "50%";
    this.dialog.open(SellersAddComponent, dialogConfig);

  }

}
