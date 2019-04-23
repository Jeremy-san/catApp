import { Component, OnInit } from '@angular/core';
import { MakeCatService } from '../make-cat.service';

@Component({
  selector: 'app-app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrls: ['./app-user-kitten.component.scss']
})
export class AppUserKittenComponent implements OnInit {

  constructor(
    public makeCatService: MakeCatService,
  ) {}

  ngOnInit() {
  }

}
