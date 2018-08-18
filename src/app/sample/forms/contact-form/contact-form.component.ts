import { Component, OnInit } from '@angular/core';
import { FadeAnimation } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [FadeAnimation]
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
