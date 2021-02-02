import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCoreComponent } from './candidate-core.component';

describe('CandidateCoreComponent', () => {
  let component: CandidateCoreComponent;
  let fixture: ComponentFixture<CandidateCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
