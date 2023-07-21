import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPLayersComponent } from './add-players.component';

describe('AddPLayersComponent', () => {
  let component: AddPLayersComponent;
  let fixture: ComponentFixture<AddPLayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPLayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
