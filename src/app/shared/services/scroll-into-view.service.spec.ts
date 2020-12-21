import { TestBed } from '@angular/core/testing';

import { ScrollIntoViewService } from './scroll-into-view.service';

describe('ScrollIntoViewService', () => {
  let service: ScrollIntoViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollIntoViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
