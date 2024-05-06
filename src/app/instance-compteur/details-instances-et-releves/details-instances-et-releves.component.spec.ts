import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInstancesEtRelevesComponent } from './details-instances-et-releves.component';

describe('DetailsInstancesEtRelevesComponent', () => {
  let component: DetailsInstancesEtRelevesComponent;
  let fixture: ComponentFixture<DetailsInstancesEtRelevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsInstancesEtRelevesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsInstancesEtRelevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
