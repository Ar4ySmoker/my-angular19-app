import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatRule',
  standalone: true
})
export class FormatRulePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const match = value.match(/^(\d+\.\d+):\s*(.+)$/);
    if (!match) {
      return value;
    }

    const number = match[1];
    let text = match[2];

    text = text.replace(/(\b(\d+[%€$]?)\b)/g, '<span class="highlight">$1</span>');

    return `<span class="rule-number">${number}</span>: <span class="rule-text">${text}</span>`;
  }
}
