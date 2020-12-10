import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSentencesComponent } from './all-sentences.component';

describe('AllSentencesComponent', () => {
  let component: AllSentencesComponent;
  let fixture: ComponentFixture<AllSentencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSentencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
