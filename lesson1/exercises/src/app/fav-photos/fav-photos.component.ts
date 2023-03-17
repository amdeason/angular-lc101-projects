import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool Photos';
  image1 = 'https://st.depositphotos.com/1146092/2514/i/600/depositphotos_25143517-stock-photo-cool-dog.jpg.png';
  image2 = 'https://wallpapers.com/images/hd/cat-with-shades-cool-picture-lkenou4wsqrbib37.jpg';
  image3 = 'https://static6.depositphotos.com/1036149/590/i/600/depositphotos_5907962-stock-photo-cool-frog.jpg';

  constructor() { }

  ngOnInit() {
  }

}