import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const DescendAnimation = trigger('descendAnimation', [
  state('in', style({ opacity: 1, transform: 'translateX(0)' })),
  transition('void => *', [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
    animate(200),
  ]),
  transition('* => void', [
    animate(200, style({ opacity: 0, transform: 'translateX(-100%)' })),
  ]),
]);
