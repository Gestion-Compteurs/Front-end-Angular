import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAgentsDeTerrainComponent } from './liste-agents-de-terrain.component';

describe('ListeAgentsDeTerrainComponent', () => {
  let component: ListeAgentsDeTerrainComponent;
  let fixture: ComponentFixture<ListeAgentsDeTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAgentsDeTerrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeAgentsDeTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
