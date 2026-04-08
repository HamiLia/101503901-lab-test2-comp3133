import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { SpacexapiService } from './spacexapi.service';

describe('SpacexapiService', () => {
  let service: SpacexapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(SpacexapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
