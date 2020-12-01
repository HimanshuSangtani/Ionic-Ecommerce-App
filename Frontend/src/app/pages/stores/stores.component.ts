import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchStoresService } from 'src/app/services/fetch-stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  DataArray=[];
  constructor(private store:FetchStoresService, private router: Router) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.store.getStores().subscribe(data=>{
      this.DataArray=data;
    })
  }

  storeDetails(storeData) {
    this.router.navigate(['../stores-detail'], {state: {data: {...storeData}}});
  }
}
