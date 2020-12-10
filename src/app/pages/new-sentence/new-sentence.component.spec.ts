import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSentenceComponent } from './new-sentence.component';

describe('NewSentenceComponent', () => {
  let component: NewSentenceComponent;
  let fixture: ComponentFixture<NewSentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSentenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
