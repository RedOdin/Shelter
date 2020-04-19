import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatInsertComponent } from './cat-insert.component';

describe('CatsInsertComponent', () => {
  let component: CatInsertComponent;
  let fixture: ComponentFixture<CatInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
