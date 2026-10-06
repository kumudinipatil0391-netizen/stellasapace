import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

type MandalaCell = TranslationService['value']['mandala']['cells'][number];

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {
  readonly mandalaText: TranslationService['value']['mandala'];
  readonly mandalaCells: MandalaCell[];
  selectedMandala: MandalaCell;

  constructor(private readonly translations: TranslationService) {
    this.mandalaText = translations.value.mandala;
    this.mandalaCells = this.mandalaText.cells;
    this.selectedMandala = this.mandalaCells[1];
  }

  selectMandala(cell: MandalaCell): void {
    this.selectedMandala = cell;
  }
}