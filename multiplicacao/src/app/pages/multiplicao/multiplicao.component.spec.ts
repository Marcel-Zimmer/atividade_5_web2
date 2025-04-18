import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicaoComponent } from './multiplicao.component';

describe('MultiplicaoComponent', () => {
  let component: MultiplicaoComponent;
  let fixture: ComponentFixture<MultiplicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
