import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  HomeImg: string =
    'https://img.freepik.com/free-vector/people-communicating-via-social-media_74855-5551.jpg';

  constructor(private goelocationService: GeolocationService){};

  ngOnInit(): void {
    this.goelocationService.getCurrentPosition();
  }
}
