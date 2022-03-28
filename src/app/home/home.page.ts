import { Component } from '@angular/core';
import{ DataGetterService, CompDish} from "../service/data-getter.service";
import{ActivatedRoute, Router} from "@angular/router";
import {DataExchangerService} from "../service/data-exchanger.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  extraData:string;
  dishes: CompDish[];
  showNew=false;
  showEdit = -1;
  userName:string;

  constructor(private dataGetter: DataGetterService,
              private router: Router,
              private route: ActivatedRoute,
              private dataExchanger: DataExchangerService) {
    this.dataExchanger.getData().subscribe(
      data => this.extraData = data
    );

    this.dataGetter.getDishes().subscribe(
      (data)=>{
        this.dishes = data;
      }
    );
    this.userName = this.dataGetter.gerUser();


  }
  add(){
    this.showNew=true;
  }
  delete(index:number){
 this.dataGetter.deleteDish(index);
  }
  addDish(dish){
   this.dataGetter.addDishes(dish);
   this.showNew = false;

  }

  sendData(){
    this.dataExchanger.publishData(this.extraData);
    this.router.navigate(
      ['/data-sender']
    );
  }

}
