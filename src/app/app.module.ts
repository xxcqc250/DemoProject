import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticalComponent } from './artical/artical.component';
import { ArticalListComponent } from './artical-list/artical-list.component';
import { LoginComponent } from './login/login.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommandFormComponent } from './command-form/command-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticalComponent,
    ArticalListComponent,
    LoginComponent,
    TopBarComponent,
    CommandFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
