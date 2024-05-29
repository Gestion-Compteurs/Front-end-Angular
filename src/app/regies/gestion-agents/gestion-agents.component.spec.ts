import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAgentsComponent } from './gestion-agents.component';

describe('GestionAgentsComponent', () => {
  let component: GestionAgentsComponent;
  let fixture: ComponentFixture<GestionAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAgentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
