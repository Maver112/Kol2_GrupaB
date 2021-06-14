import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WZForumComponent } from './components/wz-forum/wz-forum.component';
import { WZForumItemComponent } from './components/wz-forum-item/wz-forum-item.component';
import { WZForumDetailsComponent } from './components/wz-forum-details/wz-forum-details.component';
import {HttpClientModule} from '@angular/common/http';
import {WZDataService} from './wz-data.service';

@NgModule({
  declarations: [
    AppComponent,
    WZForumComponent,
    WZForumItemComponent,
    WZForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WZDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
