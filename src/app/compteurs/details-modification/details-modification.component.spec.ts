import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsModificationComponent } from './details-modification.component';

describe('DetailsModificationComponent', () => {
  let component: DetailsModificationComponent;
  let fixture: ComponentFixture<DetailsModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsModificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
