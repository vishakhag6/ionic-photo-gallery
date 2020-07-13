import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from '../commondata.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  imageList = [];

  constructor(private _dataService: CommondataService, private router: Router) {}

  ngOnInit() {
    this.showData();
  }

  showData() {
    this._dataService.getDataService().subscribe((data: any) => {
      if (data) {
        this.imageList = data.slice(0,30)
      }
    });
  }

  clickHandler (data, index) {
    this.router.navigate(['/details'], {
      queryParams: { url: data.url, index: index },
    });
  }
}
