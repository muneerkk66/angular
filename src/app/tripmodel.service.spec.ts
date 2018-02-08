import { TestBed, inject } from '@angular/core/testing';

import { TripmodelService } from './tripmodel.service';

describe('TripmodelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripmodelService]
    });
  });

  it('should be created', inject([TripmodelService], (service: TripmodelService) => {
    expect(service).toBeTruthy();
  }));
});
