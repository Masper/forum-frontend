import { TestBed, inject } from '@angular/core/testing';

import { ApiSletService } from './api-slet.service';

describe('ApiSletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSletService]
    });
  });

  it('should be created', inject([ApiSletService], (service: ApiSletService) => {
    expect(service).toBeTruthy();
  }));
});
