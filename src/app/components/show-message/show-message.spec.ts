import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMessage } from './show-message';

describe('ShowMessage', () => {
  let component: ShowMessage;
  let fixture: ComponentFixture<ShowMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
