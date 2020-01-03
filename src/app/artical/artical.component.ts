import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articals } from '../articals';
import { command } from 'src/app/command';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css']
})
export class ArticalComponent implements OnInit {

  artical: any;
  allCommand: command[] = [
    {
      date: 1,
      title: "First Title",
      content: "First Command",
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    // angular 2 取得url parameter用法
    this.route.params.subscribe( params =>{
      // 取得 artical id
      const articalId = params['articalId'];
      // 透過artical id撈文章
      this.artical = articals.find(data=> data.id==articalId);
      // console.log('articalId : '+ this.artical);
    });
      
    // angular 4+ 取得url parameter用法
    // this.route.paramMap.subscribe(params => {
    //   this.articalId = articals[+params.get('articalId')];
    // });

    
    console.log(this.artical);
  }
  

  addCommand(command_obj){
    console.log(command_obj);
    this.allCommand.push(command_obj);
  }

  

}
