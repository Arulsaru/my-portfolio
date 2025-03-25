import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondWorkComponent } from './beyond-work.component';

describe('BeyondWorkComponent', () => {
  let component: BeyondWorkComponent;
  let fixture: ComponentFixture<BeyondWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeyondWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeyondWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
