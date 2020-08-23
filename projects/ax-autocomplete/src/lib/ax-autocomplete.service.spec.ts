import { TestBed } from '@angular/core/testing';

import { AxAutocompleteService } from './ax-autocomplete.service';

describe('AxAutocompleteService', () => {
  let service: AxAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
