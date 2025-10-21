import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TERMS } from '../constants/terms.constant';
import { Term } from '../types/Term';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() rules: string[] = [];
  @Input() termIndex = 0;
  @Input() ruleIndex = 0;
  @Input() open = false;

  @Output() toggle = new EventEmitter<void>();

  terms: Term[] = TERMS;

  onToggle() {
    this.toggle.emit();
  }
}
