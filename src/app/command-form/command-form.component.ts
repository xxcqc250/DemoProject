import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { command } from 'src/app/command';

@Component({
  selector: 'app-command-form',
  templateUrl: './command-form.component.html',
  styleUrls: ['./command-form.component.css']
})
export class CommandFormComponent implements OnInit {

  CommandContent = '';
  CommandTitle = "";


  @Output() addCommand = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(){
    let name = localStorage.getItem('user_name');
    console.log(this.CommandTitle);
    console.log(this.CommandContent);
    let command_obj= {
      date: (new Date()).getTime(),
      name: name,
      title: this.CommandTitle,
      content: this.CommandContent.replace("\r\n", "\\r\\n"),
    };

    this.addCommand.emit(command_obj);

    // 將輸入的內容清除
    this.CommandContent="";
    this.CommandTitle="";

  }
  

}
