import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuyashLernaComponent } from './suyash-lerna.component';

describe('SuyashLernaComponent', () => {
  let component: SuyashLernaComponent;
  let fixture: ComponentFixture<SuyashLernaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuyashLernaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuyashLernaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
