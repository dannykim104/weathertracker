import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashintondcComponent } from './washintondc.component';

describe('WashintondcComponent', () => {
  let component: WashintondcComponent;
  let fixture: ComponentFixture<WashintondcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashintondcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashintondcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
