import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideJoinRoomMenuComponent } from './aside-join-room-menu.component';

describe('AsideJoinRoomMenuComponent', () => {
  let component: AsideJoinRoomMenuComponent;
  let fixture: ComponentFixture<AsideJoinRoomMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideJoinRoomMenuComponent]
    });
    fixture = TestBed.createComponent(AsideJoinRoomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
