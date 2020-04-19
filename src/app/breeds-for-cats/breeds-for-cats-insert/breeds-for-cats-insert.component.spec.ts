import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsForCatsInsertComponent } from './breeds-for-cats-insert.component';

describe('BreedsForCatsInsertComponent', () => {
  let component: BreedsForCatsInsertComponent;
  let fixture: ComponentFixture<BreedsForCatsInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedsForCatsInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsForCatsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
