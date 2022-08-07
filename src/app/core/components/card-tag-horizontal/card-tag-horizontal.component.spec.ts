import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTagHorizontalComponent } from './card-tag-horizontal.component';

describe('CardTagHorizontalComponent', () => {
  let component: CardTagHorizontalComponent;
  let fixture: ComponentFixture<CardTagHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTagHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTagHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
