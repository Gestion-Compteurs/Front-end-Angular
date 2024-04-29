import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCompteursComponent } from './liste-compteurs.component';

describe('ListeCompteursComponent', () => {
  let component: ListeCompteursComponent;
  let fixture: ComponentFixture<ListeCompteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCompteursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeCompteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
