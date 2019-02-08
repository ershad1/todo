import { TestBed } from '@angular/core/testing';

import { HttpInterceptorBasicAuthServiceService } from './http-interceptor-basic-auth-service.service';

describe('HttpInterceptorBasicAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptorBasicAuthServiceService = TestBed.get(HttpInterceptorBasicAuthServiceService);
    expect(service).toBeTruthy();
  });
});
