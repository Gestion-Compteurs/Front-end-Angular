import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBatimentsComponent } from './ajout-batiments.component';

describe('AjoutBatimentsComponent', () => {
  let component: AjoutBatimentsComponent;
  let fixture: ComponentFixture<AjoutBatimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutBatimentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutBatimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
