import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {MatIconModule} from '@angular/material/icon'
import {HowItWorksComponent} from './components/how-it-works/how-it-works.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, WelcomeComponent, MatIconModule, HowItWorksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SofiPsychology';
}
