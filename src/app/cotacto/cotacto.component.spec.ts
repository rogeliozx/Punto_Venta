import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactoComponent } from './cotacto.component';

describe('CotactoComponent', () => {
  let component: CotactoComponent;
  let fixture: ComponentFixture<CotactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
