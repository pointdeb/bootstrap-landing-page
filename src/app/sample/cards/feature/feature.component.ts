import { Component, OnInit } from '@angular/core';
import { FadeAnimation } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: [FadeAnimation]
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
