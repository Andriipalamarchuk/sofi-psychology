import { TestBed } from '@angular/core/testing';
import { HowItWorksComponent } from './how-it-works.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItWorksComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HowItWorksComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'SofiPsychology' title`, () => {
    const fixture = TestBed.createComponent(HowItWorksComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SofiPsychology');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HowItWorksComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, SofiPsychology');
  });
});
