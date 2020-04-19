import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedsInsertComponent } from './cat-breeds-insert.component';

describe('CatBreedsInsertComponent', () => {
  let component: CatBreedsInsertComponent;
  let fixture: ComponentFixture<CatBreedsInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatBreedsInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBreedsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
