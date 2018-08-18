import { Component, OnInit } from '@angular/core';
import { FadeAnimation } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations: [FadeAnimation]
})
export class DiscoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
