import { Component } from '@angular/core';
import { TermsComponent } from '../terms/terms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TermsComponent],  
})
export class AppComponent {
  title = 'my-angular19-app';
}
