import { Component, OnInit } from '@angular/core';
import {DataGetterService} from "../service/data-getter.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
})
export class ComponentsPage implements OnInit {
  dishName: string;
  components:any[];

  constructor(private dataGetter:DataGetterService, private route:ActivatedRoute){}

  ngOnInit() {
    this.dishName =  this.route.snapshot.paramMap.get('dishname');
    this.dataGetter.getComponents(this.dishName).subscribe(
      data => {
        this.components = data;
      }
    );

  }

}
