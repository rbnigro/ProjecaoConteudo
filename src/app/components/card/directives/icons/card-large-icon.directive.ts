import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardLargeIcon]',
  standalone: false,
  host: { class: 'ca-c-card__large-icon' },
})
export class CardLargeIconDirective {}
