import {Component,OnInit} from '@angular/core'
import {KPIService} from '../Services/kpi.service.js'
import {KPIDetail} from '../Interfaces/KPI.js'
@Component({
    selector:'dash-kpi',
    templateUrl:'./Node/app/dashboard/kpi.component.html'
})
export class KPIComponent implements OnInit
{
    kpidetail:KPIDetail= {Total:0,ATotal:0,BTotal:0,CTotal:0};
    message:string="";
    constructor(private kpiservice:KPIService){}
    getKPIDetail():void {
        this.kpiservice.getKPIData().then(kpi=>this.kpidetail==kpi);
    }
    getMessage():void{
        this.message=this.kpiservice.getString();
    }
    ngOnInit():void {
        this.getKPIDetail();
        this.getMessage();
    }
}