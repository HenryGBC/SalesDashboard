import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAuthComponent } from './base-auth.component';

describe('BaseAuthComponent', () => {
  let component: BaseAuthComponent;
  let fixture: ComponentFixture<BaseAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
