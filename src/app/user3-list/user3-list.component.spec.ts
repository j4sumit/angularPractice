import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User3ListComponent } from './user3-list.component';

describe('User3ListComponent', () => {
  let component: User3ListComponent;
  let fixture: ComponentFixture<User3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User3ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
