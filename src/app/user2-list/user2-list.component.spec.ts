import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User2ListComponent } from './user2-list.component';

describe('User2ListComponent', () => {
  let component: User2ListComponent;
  let fixture: ComponentFixture<User2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User2ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
