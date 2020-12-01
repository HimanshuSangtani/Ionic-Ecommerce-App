import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores-details',
  templateUrl: './stores-details.component.html',
  styleUrls: ['./stores-details.component.scss'],
})
export class StoresDetailsComponent implements OnInit {
  storeData;
  constructor() { 
    this.storeData = history.state.data;
  }

  ngOnInit() {}

}
