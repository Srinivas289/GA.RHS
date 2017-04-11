import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component.js';
import { KPIComponent } from './dashboard/kpi.component.js';
import { NotificationsComponent } from './dashboard/notifications.component.js'
import { ChatComponent } from './dashboard/chat.component.js'
import { TimelineComponent } from './dashboard/timeline.component.js'
import { NavLeftComponent } from './dashboard/nav-left.component.js'
import { NavRightComponent } from './dashboard/nav-right.component.js'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,KPIComponent,NotificationsComponent,ChatComponent,TimelineComponent,NavLeftComponent,
                  NavRightComponent ],
  bootstrap:    [ AppComponent,KPIComponent,NotificationsComponent,ChatComponent,TimelineComponent,NavLeftComponent,
                NavRightComponent ]
})
export class AppModule { }
