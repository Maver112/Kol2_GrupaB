import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WZForumComponent} from './components/wz-forum/wz-forum.component';
import {WZForumDetailsComponent} from './components/wz-forum-details/wz-forum-details.component';

const routes: Routes = [
  {
    path: '',
    component: WZForumComponent
  },
  {
    path: 'forum/detail/:id',
    component: WZForumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
