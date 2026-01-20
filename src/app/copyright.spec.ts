import { Copyright } from './copyright';

import { ElementRef } from '@angular/core';

describe('Copyright', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new Copyright(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
