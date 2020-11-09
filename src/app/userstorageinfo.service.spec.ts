import { TestBed } from '@angular/core/testing';

import { UserstorageinfoService } from './userstorageinfo.service';

describe('UserstorageinfoService', () => {
  let service: UserstorageinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserstorageinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
