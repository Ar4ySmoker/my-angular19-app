import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SplitRulePipe } from '../app/pipes/split-rule.pipe';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, SplitRulePipe],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() rules: string[] = [];
  @Input() open: boolean = false;

  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}
