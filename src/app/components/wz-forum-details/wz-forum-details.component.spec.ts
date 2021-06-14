import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WZForumDetailsComponent } from './wz-forum-details.component';

describe('WZForumDetailsComponent', () => {
  let component: WZForumDetailsComponent;
  let fixture: ComponentFixture<WZForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WZForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WZForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
