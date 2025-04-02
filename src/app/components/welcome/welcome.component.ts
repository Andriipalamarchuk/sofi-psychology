import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  imports: [
    MatIconModule
  ],
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  title = 'SofiPsychology';
}
