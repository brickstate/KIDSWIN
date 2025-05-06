import { TestBed } from '@angular/core/testing';

import { FormForTeachParService } from './form-for-teach-par.service';

describe('FormForTeachParService', () => {
  let service: FormForTeachParService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormForTeachParService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
