import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedsUpdateComponent } from './cat-breeds-update.component';

describe('CatBreedsUpdateComponent', () => {
  let component: CatBreedsUpdateComponent;
  let fixture: ComponentFixture<CatBreedsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatBreedsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBreedsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
