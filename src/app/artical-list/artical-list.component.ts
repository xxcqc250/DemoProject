import { Component, OnInit } from '@angular/core';
// import { articals } from 'src/app/articals';
import { articals } from '../articals';

@Component({
  selector: 'app-artical-list',
  templateUrl: './artical-list.component.html',
  styleUrls: ['./artical-list.component.css']
})
export class ArticalListComponent implements OnInit {

  articals = articals;

  constructor() { }

  ngOnInit() {
  }

  errorHandler(event) {
    if(event.target.id == 'img_message_board'){
      event.target.src = "https://i.imgur.com/VegErHY.jpg";
    }
    else if(event.target.id == "img_book"){
      event.target.src = "https://i.imgur.com/z5Tlpe8.png";
    }
    
  }
}
