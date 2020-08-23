import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxAutocompleteComponent } from './ax-autocomplete.component';

describe('AxAutocompleteComponent', () => {
  let component: AxAutocompleteComponent;
  let fixture: ComponentFixture<AxAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
