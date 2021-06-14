import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WZForumItemComponent } from './wz-forum-item.component';

describe('WZForumItemComponent', () => {
  let component: WZForumItemComponent;
  let fixture: ComponentFixture<WZForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WZForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WZForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
