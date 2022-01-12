import { Component } from '@angular/core';
import { Items } from './items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

menu : Items[] = 
[
  new Items("Pine Pizza","Dinner",17.65),
  new Items("Chicken Sandwich","Lunch",10.65),
  new Items("Small Pizza","Breakfast",65.32),
  new Items("Wings","Lunch",20.23),
  new Items("Steak Omelette","Breakfast",5.00),
];

}
