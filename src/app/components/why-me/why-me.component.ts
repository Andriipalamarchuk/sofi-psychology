import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {PlanMeetingButtonComponent} from '../plan-meeting-button/plan-meeting-button.component';

@Component({
  selector: 'app-why-me',
  templateUrl: './why-me.component.html',
  imports: [
    MatIconModule,
    PlanMeetingButtonComponent,
  ],
  styleUrl: './why-me.component.css'
})
export class WhyMeComponent {
  activeId: number = 1;

  protected changeActiveId(id: number): void {
    if (id < 1 || id > 7) {
      return;
    }

    this.activeId = id;
  }
}
