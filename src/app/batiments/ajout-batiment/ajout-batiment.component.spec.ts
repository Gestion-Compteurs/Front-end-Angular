import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBatimentComponent } from './ajout-batiment.component';

describe('AjoutBatimentComponent', () => {
  let component: AjoutBatimentComponent;
  let fixture: ComponentFixture<AjoutBatimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutBatimentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutBatimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
