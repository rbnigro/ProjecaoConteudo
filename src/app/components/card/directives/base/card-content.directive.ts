import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content',
  standalone: false,
  host: { 'class': 'ca-c-card__content' }
})
export class CardContentDirective {}
