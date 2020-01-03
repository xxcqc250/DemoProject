import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthorizationService } from 'src/app/service/authorization.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    {
      provide: AuthorizationService, 
      useClass: AuthorizationService
    }
  ]
})
export class LoginComponent implements OnInit {

  users: any;
  user_auth: boolean;
  login_message: String;

  constructor(
    private authorizationService:AuthorizationService,
    private router: Router
    ) { }

  ngOnInit() {
    
    
  }

  loginForm = new FormGroup({
    account: new FormControl('root'),
    password: new FormControl('root')
  });

  // submit form
  onSubmit(){
    console.warn(this.loginForm.value);
    
    this.users = this.authorizationService.getConfig();
    this.users.subscribe( data=>{

      // 驗證使用者帳密是否正確
      const result = data.find(GetAuthResult, this.loginForm);
      function GetAuthResult(element, index, array) {
        return element.account == this.value.account && element.password == this.value.password;
      }
      
      if(result){
        // 有回傳資料，將使用者id存入local storage
        localStorage.setItem('user_id', result['id']);
        // console.log("user_id : "+localStorage.getItem('user_id'));
        this.login_message = "登入成功";
        this.router.navigate(['/']);
      }
      else{
        this.login_message = "帳號密碼錯誤";
      }

    });
  }
}
