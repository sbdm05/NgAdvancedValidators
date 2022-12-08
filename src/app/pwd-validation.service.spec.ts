import { TestBed } from '@angular/core/testing';

import { PwdValidationService } from './pwd-validation.service';

describe('PwdValidationService', () => {
  let service: PwdValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwdValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
