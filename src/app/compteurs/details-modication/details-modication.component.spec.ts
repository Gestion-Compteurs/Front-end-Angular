import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsModicationComponent } from './details-modication.component';

describe('DetailsModicationComponent', () => {
  let component: DetailsModicationComponent;
  let fixture: ComponentFixture<DetailsModicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsModicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsModicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
