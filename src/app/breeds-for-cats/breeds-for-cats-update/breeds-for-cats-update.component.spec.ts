import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsForCatsUpdateComponent } from './breeds-for-cats-update.component';

describe('BreedsForCatsUpdateComponent', () => {
  let component: BreedsForCatsUpdateComponent;
  let fixture: ComponentFixture<BreedsForCatsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedsForCatsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsForCatsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
