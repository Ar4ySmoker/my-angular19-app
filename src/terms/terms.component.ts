import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';
import { ToggleSwitcherComponent } from '../toggle-switcher/toggle-switcher.component';
import { TERMS } from '../constants/terms.constant';
import { Term } from '../types/Term';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, AccordionComponent, ToggleSwitcherComponent],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {
  selectedIndex = 0;
  terms: Term[] = TERMS;

  get titles(): string[] {
    return this.terms.map(term => term.tab);
  }

  onToggle(index: number): void {
  if (this.selectedIndex === index) {
    this.selectedIndex = -1;
  } else {
    this.selectedIndex = index;
  }
}
}
