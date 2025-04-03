import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  imports: [
    MatIconModule
  ],
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  title = 'SofiPsychology';
}
