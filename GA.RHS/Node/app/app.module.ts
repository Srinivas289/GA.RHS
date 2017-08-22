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
import { TopNavComponent } from './dashboard/topnav.component.js'
import { DonutChartComponent } from './dashboard/charts/donut.component.js'
import { AreaChartComponent } from './dashboard/charts/area-chart.component.js'
import { BarChartComponent } from './dashboard/charts/bar-chart.component.js'
import { DashboardComponent } from './dashboard/dashboard.component.js'
import { ListComponent } from './list/list.component.js'
import { ChartsComponent } from './charts/charts.component.js'
import { ScoresService } from './services/scores.service.js'

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent,KPIComponent,NotificationsComponent,ChatComponent,TimelineComponent,NavLeftComponent,
                  NavRightComponent,TopNavComponent,DonutChartComponent,AreaChartComponent,BarChartComponent,
                  DashboardComponent,ListComponent,ChartsComponent ],
  bootstrap:    [ AppComponent],
  providers:    [KPIService,ScoresService]
})
export class AppModule { }