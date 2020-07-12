import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommondataService } from '../commondata.service';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.scss'],
})
export class DetailsComponentComponent implements OnInit {
  loadedImage = '';
  loadedIndex;
  dataList = [];
  currentIndex:Number;

  @ViewChild('slides', { static: false }) slides: IonSlides;

  constructor( private _dataService: CommondataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loadedImage = params.url;
      this.loadedIndex = Number(params.index);
    });
    this.showData();
  }

  slideChanged(slides: IonSlides) {
   slides.getActiveIndex().then((index: number) => {
    console.log(index);
    // this.currentIndex = index;
   });
  } 

  showData() {
    this._dataService.getDataService().subscribe((data: any) => {
      this.dataList = data
    });
  }
}
