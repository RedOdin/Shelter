import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsForCatsComponent } from './breeds-for-cats.component';

describe('BreedsForCatsComponent', () => {
  let component: BreedsForCatsComponent;
  let fixture: ComponentFixture<BreedsForCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedsForCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsForCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
