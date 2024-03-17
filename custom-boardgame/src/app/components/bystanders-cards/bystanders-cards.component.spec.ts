import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BystandersCardsComponent } from './bystanders-cards.component';

describe('BystandersCardsComponent', () => {
  let component: BystandersCardsComponent;
  let fixture: ComponentFixture<BystandersCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BystandersCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BystandersCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
