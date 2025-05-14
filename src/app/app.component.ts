import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {MatIconModule} from '@angular/material/icon'
import {HowItWorksComponent} from './components/how-it-works/how-it-works.component';
import {MyMissionComponent} from './components/my-mission/my-mission.component';
import {WhyMeComponent} from './components/why-me/why-me.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, WelcomeComponent, MatIconModule, HowItWorksComponent, MyMissionComponent, WhyMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SofiPsychology';
}
