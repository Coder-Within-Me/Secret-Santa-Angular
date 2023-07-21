import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWishlistComponent } from './child-wishlist.component';

describe('ChildWishlistComponent', () => {
  let component: ChildWishlistComponent;
  let fixture: ComponentFixture<ChildWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildWishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
