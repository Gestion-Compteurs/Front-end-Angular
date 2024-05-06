import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBatimentsComponent } from './liste-batiments.component';

describe('ListeBatimentsComponent', () => {
  let component: ListeBatimentsComponent;
  let fixture: ComponentFixture<ListeBatimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeBatimentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeBatimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
