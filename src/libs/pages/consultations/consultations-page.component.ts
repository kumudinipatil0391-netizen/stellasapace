import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-consultations-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultations-page.component.html',
  styleUrls: ['./consultations-page.component.scss']
})
export class ConsultationsPageComponent {
  readonly text: TranslationService['value']['consult'];

  constructor(private readonly translations: TranslationService) {
    this.text = translations.value.consult;
  }
}