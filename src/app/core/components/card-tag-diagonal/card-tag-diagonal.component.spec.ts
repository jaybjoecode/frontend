import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTagDiagonalComponent } from './card-tag-diagonal.component';

describe('CardTagDiagonalComponent', () => {
  let component: CardTagDiagonalComponent;
  let fixture: ComponentFixture<CardTagDiagonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTagDiagonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTagDiagonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
