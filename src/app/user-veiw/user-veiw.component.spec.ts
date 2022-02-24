import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVeiwComponent } from './user-veiw.component';

describe('UserVeiwComponent', () => {
  let component: UserVeiwComponent;
  let fixture: ComponentFixture<UserVeiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVeiwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
