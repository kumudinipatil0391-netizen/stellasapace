import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  readonly text: TranslationService['value']['hero'];

  constructor(private readonly translations: TranslationService) {
    this.text = translations.value.hero;
  }
}
