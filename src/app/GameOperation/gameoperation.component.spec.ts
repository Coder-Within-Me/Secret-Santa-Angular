import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameoperationComponent } from './gameoperation.component';

describe('GameoperationComponent', () => {
  let component: GameoperationComponent;
  let fixture: ComponentFixture<GameoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameoperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
