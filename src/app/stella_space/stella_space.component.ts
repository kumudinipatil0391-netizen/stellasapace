import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LeafBackgroundComponent } from '../../libs/shared/common/leaf-background/leaf-background.component';
import { TranslationBundle, TranslationService } from '../../libs/services/translation.service';

@Component({
  selector: 'app-stella-space',
  standalone: true,
  imports: [LeafBackgroundComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './stella_space.component.html'
})
export class StellaSpaceComponent {
  readonly t: TranslationBundle;

  constructor(private readonly translationService: TranslationService) {
    this.t = this.translationService.value;
  }
}
