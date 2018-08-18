import { Component, OnInit } from '@angular/core';
import { FadeAnimation } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
  animations: [
    FadeAnimation
  ]
})
export class CoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
