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
  dataList = [];
  currentIndex:Number;

  @ViewChild('slides', { static: false }) slides: IonSlides;
  constructor( private _dataService: CommondataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.currentIndex = Number(params.index);
    });
    this.showData();
  }


  ionViewDidEnter() {
    this.slides.slideTo(Number(this.currentIndex), 0); // The 0 will avoid the transition of the slides to be shown
  }
  
//   slideChanged(slides: IonSlides) {
//    slides.getActiveIndex().then((index: number) => {
//     console.log('getActiveIndex', index);
//    });
//  } 

  showData() {
    this._dataService.getDataService().subscribe((data: any) => {
      this.dataList = data.slice(0, 30)
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
