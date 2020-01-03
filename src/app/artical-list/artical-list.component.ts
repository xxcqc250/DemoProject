import { Component, OnInit } from '@angular/core';
import { articals } from 'src/app/articals';

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

}
