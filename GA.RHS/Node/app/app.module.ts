import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component.js';
import { KPIComponent } from './dashboard/kpi.component.js';
import { NotificationsComponent } from './dashboard/notifications.component.js'
import { ChatComponent } from './dashboard/chat.component.js'
import { TimelineComponent } from './dashboard/timeline.component.js'
import { NavLeftComponent } from './dashboard/nav-left.component.js'
import { NavRightComponent } from './dashboard/nav-right.component.js'
import {KPIService} from './Services/kpi.service.js'
@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent,KPIComponent,NotificationsComponent,ChatComponent,TimelineComponent,NavLeftComponent,
                  NavRightComponent ],
  bootstrap:    [ AppComponent,KPIComponent,NotificationsComponent,ChatComponent,TimelineComponent,NavLeftComponent,
                NavRightComponent ],
  providers:[KPIService]
})
export class AppModule { }