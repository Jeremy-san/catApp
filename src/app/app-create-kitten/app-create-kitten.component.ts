import { Component, OnInit } from '@angular/core';
import { MakeCatService } from '../make-cat.service';


@Component({
  selector: 'app-app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.scss']
})
export class AppCreateKittenComponent implements OnInit {

  constructor(
    public makeCatService: MakeCatService,
  ) {}

  ngOnInit() {
  }

}
