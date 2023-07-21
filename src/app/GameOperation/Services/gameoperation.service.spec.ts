import { TestBed } from '@angular/core/testing';

import { GameoperationService } from './gameoperation.service';

describe('GameoperationService', () => {
  let service: GameoperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameoperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
