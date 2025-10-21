import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-switcher.component.html',
})
export class ToggleSwitcherComponent {
  @Input() titles: string[] = [];
  @Input() tabs: string[] = [];
  @Input() selectedTab: string = '';
  @Output() selectedTabChange = new EventEmitter<string>();

  select(tab: string) {
    if (tab !== this.selectedTab) {
      this.selectedTab = tab;
      this.selectedTabChange.emit(tab);
    }
  }
}
