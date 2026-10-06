import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-approach-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approach-page.component.html',
  styleUrls: ['./approach-page.component.scss']
})
export class ApproachPageComponent {
  readonly text: TranslationService['value']['approach'];

  constructor(private readonly translations: TranslationService) {
    this.text = translations.value.approach;
  }
}