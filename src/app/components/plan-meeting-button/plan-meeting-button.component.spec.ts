import { TestBed } from '@angular/core/testing';
import { PlanMeetingButtonComponent } from './plan-meeting-button.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanMeetingButtonComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PlanMeetingButtonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'SofiPsychology' title`, () => {
    const fixture = TestBed.createComponent(PlanMeetingButtonComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SofiPsychology');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PlanMeetingButtonComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, SofiPsychology');
  });
});
