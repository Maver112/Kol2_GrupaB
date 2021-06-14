import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WZForumComponent } from './wz-forum.component';

describe('WZForumComponent', () => {
  let component: WZForumComponent;
  let fixture: ComponentFixture<WZForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WZForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WZForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
