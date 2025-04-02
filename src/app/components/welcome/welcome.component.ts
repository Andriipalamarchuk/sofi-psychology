import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'SofiPsychology';
}
