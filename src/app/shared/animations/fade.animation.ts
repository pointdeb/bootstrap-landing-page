import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const FadeAnimation = trigger('fade', [
  state('void', style({ opacity: 0, transform: 'translateY(10px)' })),
  transition(':enter, :leave', [animate('0.5s')])
]);
