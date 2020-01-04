import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ArticalListComponent} from 'src/app/artical-list/artical-list.component';
// import { ArticalComponent} from 'src/app/artical/artical.component';
// import { LoginComponent } from 'src/app/login/login.component';
import { ArticalListComponent} from './artical-list/artical-list.component';
import { ArticalComponent} from './artical/artical.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ArticalListComponent
  },

  {
    path: 'artical/:articalId',
    component: ArticalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
