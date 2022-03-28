import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataExchangerService {
   private data = new Subject<any>();
  constructor() { }
  publishData(input:any){
    this.data.next(input);
  }
  getData(): Subject<any>{
    return this.data;
  }
}
