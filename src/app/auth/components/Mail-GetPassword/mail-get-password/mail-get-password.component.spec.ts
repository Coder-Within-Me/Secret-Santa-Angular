import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailGetPasswordComponent } from './mail-get-password.component';

describe('MailGetPasswordComponent', () => {
  let component: MailGetPasswordComponent;
  let fixture: ComponentFixture<MailGetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailGetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailGetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
