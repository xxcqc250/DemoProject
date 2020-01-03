import { Component, OnInit, OnChanges, Input  } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit,OnChanges  {

  constructor() { }
  
  visitor_name:String ;

  ngOnInit() {
    localStorage.clear();
  }
  
  ngOnChanges(){
    console.log('set');
    
  }
  
  readLocalStorageValue() {
    this.visitor_name = "Sam";
    return localStorage.getItem('user_id');
  }

  logout(){
    localStorage.clear();
  }
}
