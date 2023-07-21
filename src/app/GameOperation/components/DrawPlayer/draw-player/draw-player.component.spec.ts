import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPlayerComponent } from './draw-player.component';

describe('DrawPlayerComponent', () => {
  let component: DrawPlayerComponent;
  let fixture: ComponentFixture<DrawPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
