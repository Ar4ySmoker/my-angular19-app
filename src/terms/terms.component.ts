import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';
import { ToggleSwitcherComponent } from '../toggle-switcher/toggle-switcher.component';
import { TERMS } from '../constants/terms.constant';
import type { Term } from '../types/Term';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, AccordionComponent, ToggleSwitcherComponent],
  templateUrl: './terms.component.html',
})
export class TermsComponent {
  terms: Term[] = TERMS;
  i: number = 0;
  titles = this.terms.map(t => t.title);
  tabs = this.terms.map(t => t.tab);
  selectedTab = signal<string>(this.terms[0]?.tab ?? '');

  onSelect(tab: string) {
    if (this.selectedTab() === tab) {
      this.selectedTab.set('');
    } else {
      this.selectedTab.set(tab);
    }
    console.log('New selectedTab:', this.selectedTab());
  }

}
