import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'
import {DashboardComponent} from './dashboard/dashboard.component.js'
import {ListComponent} from './list/list.component.js'
import {ChartsComponent} from './charts/charts.component.js'
const appRoutes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'list',component:ListComponent},
    {path:'charts',component:ChartsComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule
{}