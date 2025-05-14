import { TestBed } from '@angular/core/testing';
import { WhyMeComponent } from './why-me.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMeComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WhyMeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'SofiPsychology' title`, () => {
    const fixture = TestBed.createComponent(WhyMeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SofiPsychology');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(WhyMeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, SofiPsychology');
  });
});
