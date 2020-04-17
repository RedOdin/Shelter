import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsInsertComponent } from './cats-insert.component';

describe('CatsInsertComponent', () => {
  let component: CatsInsertComponent;
  let fixture: ComponentFixture<CatsInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
