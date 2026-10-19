import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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

  @ViewChild('homeDropdown') private homeDropdown?: ElementRef<HTMLDetailsElement>;

  constructor(private readonly translationService: TranslationService) {
    this.t = this.translationService.value;
  }

  closeHomeDropdown(): void {
    if (this.homeDropdown) {
      this.homeDropdown.nativeElement.open = false;
    }
  }

  @HostListener('document:click', ['$event'])
  closeHomeDropdownOnOutsideClick(event: MouseEvent): void {
    const dropdown = this.homeDropdown?.nativeElement;
    if (dropdown?.open && event.target instanceof Node && !dropdown.contains(event.target)) {
      dropdown.open = false;
    }
  }
}
