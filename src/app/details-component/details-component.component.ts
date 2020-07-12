import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommondataService } from '../commondata.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.scss'],
})
export class DetailsComponentComponent implements OnInit {
  loadedImage = '';
  loadedIndex;
  dataList = []
  constructor( private _dataService: CommondataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loadedImage = params.url;
      this.loadedIndex = Number(params.index);
    });
    this.showData();
  }

  showData() {
    this._dataService.getDataService().subscribe((data: any) => {
      this.dataList = data
    });
  }

  goNext(value) {
    if (value === '0') {
      if (this.loadedIndex > 0) {
        this.loadedIndex -= 1;
      } else {
        this.loadedIndex = 0;
      }
    } else if (value === '1') {
      if (this.loadedIndex !== this.dataList.length - 1) {
        this.loadedIndex += 1;
      } else {
        this.loadedIndex = 0;
      }
    }
    this.loadedImage = this.dataList[this.loadedIndex].url;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
