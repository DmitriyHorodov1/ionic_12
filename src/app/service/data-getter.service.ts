import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";

export interface CompDish {
  name: string;
  type:string;
  weight:number;
  componentQuantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private dishes: CompDish[]=[
    {
      name : 'Pizza',
      type: 'bread',
      weight: 500,
      componentQuantity:10
    },
    {
      name : 'Cake',
      type: 'sweat',
      weight: 500,
      componentQuantity:10
    },

  ];

  private components= [
    {name:'meat', dishName:'Cake}'},
    {name:'sauce', dishName:'Cake}'},
    {name:'vegetables', dishName: 'Cake}'},
    {name:'cake layers', dishName: 'Pizza}'},
    {name:'sausage', dishName: 'Pizza}'},
    {name:'tomato paste', dishName: 'Pizza}'}
  ];


  private userName='';


  getComponents(dishName: string): Observable<any[]>{
    return of (this.components.filter(
      elem=>elem.dishName === dishName
    ));
  }

  private users =['Василь', 'Петро','Олена'];


  constructor() { }

  gerUser(){
    return this.userName;
  }

  setUser(name:string){
    this.userName = name;
  }

  userExists(name:string):boolean{
    return this.users.indexOf(name) !== -1;
  }



  getDishes(): Observable<CompDish[]>{
    return of (this.dishes);
  }

  addDishes(dish: CompDish){
    this.dishes.push(dish);
  }

  deleteDish(index){
    this.dishes.splice(index,1)
  }
}
