import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from '../commondata.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  imageList = [];
  @HostListener("scroll", ['"hello!"', "$event"])
  LoadMoreData(event) {
    console.log('scrollingggggg', event)
  }


  constructor(private _dataService: CommondataService, private router: Router) {}

  ngOnInit() {
    this.showData();
  }

  showData() {
    this._dataService.getDataService().subscribe((data: any) => {
      if (data) {
        this.imageList = data.slice(0, 10)
      }
    });
  }

  clickHandler (data, index) {
    this.router.navigate(['/details'], {
      queryParams: { url: data.url, index: index },
    });
  }
}
