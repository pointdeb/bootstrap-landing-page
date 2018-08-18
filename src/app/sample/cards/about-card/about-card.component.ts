import { Component, OnInit } from '@angular/core';
import { FadeAnimation } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
  animations: [FadeAnimation]
})
export class AboutCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
