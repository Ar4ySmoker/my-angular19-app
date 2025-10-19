import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-switcher.component.html',
  styleUrls: ['./toggle-switcher.component.css'],
})
export class ToggleSwitcherComponent {
  @Input() titles: string[] = [];
  @Input() selectedIndex = 0;
  @Output() selectedIndexChange = new EventEmitter<number>();

  select(index: number) {
    if (index !== this.selectedIndex) {
      this.selectedIndex = index;
      this.selectedIndexChange.emit(index);
    }
  }
}
