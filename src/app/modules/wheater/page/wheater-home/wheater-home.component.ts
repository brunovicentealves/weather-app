import { Component,OnInit,OnDestroy } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/weather.interface';
import {Subject,takeUntil } from 'rxjs'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit , OnDestroy{

private readonly destroy$:Subject<void>=new Subject();

initialCityName:string='Porto Alegre';

weatherDatas!: WeatherDatas;

searchIcon=faMagnifyingGlass

constructor(private weatherService:WeatherService){}


ngOnInit(): void {
    this.getweatherDatas(this.initialCityName);
}

 getweatherDatas(cityName:string):void{

  this.weatherService.getweatherDatas(cityName)
  .pipe(
    takeUntil(this.destroy$)
  )
  .subscribe({
    next: (response)=>{
     response && (this.weatherDatas=response);
     console.log(this.weatherDatas)
    },
    error:(error)=>console.log(error),

  })
}

onSubimit():void{
this.getweatherDatas(this.initialCityName);
this.initialCityName='';
}

ngOnDestroy(): void {
this.destroy$.next();
this.destroy$.complete();
}


}
