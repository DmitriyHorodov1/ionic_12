import { Component,EventEmitter ,Input, OnInit, Output } from '@angular/core';
import {CompDish} from "../../service/data-getter.service";

@Component({
  selector: 'app-comp-dish',
  templateUrl: './comp-dish.component.html',
  styleUrls: ['./comp-dish.component.scss'],
})
export class CompDishComponent implements OnInit {

  @Input() componentDish: CompDish;
  @Input() isNew:boolean;
  @Output() addDish = new EventEmitter();
  @Output() cancelAddingDish = new EventEmitter();
  title: string;
  constructor() { }

  ngOnInit(){
    if(this.isNew){
      this.componentDish = {
        name: '',
        type:'',
        weight : null,
        componentQuantity : null,
      };
      this.title = 'New Dish';
    }
  }
   addNew(){
    if(this.isNew){
      this.addDish.emit(this.componentDish);
    }
   }
   cancelAdding(){
    if(this.isNew){
      this.cancelAddingDish.emit();
    }
  }
}
