import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginDialogComponent } from './after-login-dialog.component';

describe('AfterLoginDialogComponent', () => {
  let component: AfterLoginDialogComponent;
  let fixture: ComponentFixture<AfterLoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterLoginDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
