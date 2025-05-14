import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {PlanMeetingButtonComponent} from '../plan-meeting-button/plan-meeting-button.component';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  imports: [
    MatIconModule,
    PlanMeetingButtonComponent,
  ],
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  title = 'SofiPsychology';
}
