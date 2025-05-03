import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardTitleText]',
  standalone: false,
  host: { 'class': 'ca-c-card__title-text' }
})
export class CardTitleTextDirective {

  constructor() { }

}
