import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardMediumIcon]',
  standalone: false,
  host: { class: 'ca-c-card__medium-icon' },
})
export class CardMediumIconDirective {}
