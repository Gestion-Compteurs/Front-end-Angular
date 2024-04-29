import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRelevesComponent } from './liste-releves.component';

describe('ListeRelevesComponent', () => {
  let component: ListeRelevesComponent;
  let fixture: ComponentFixture<ListeRelevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeRelevesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeRelevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
