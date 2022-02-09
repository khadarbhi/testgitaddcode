import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurelabsComponent } from './azurelabs.component';

describe('AzurelabsComponent', () => {
  let component: AzurelabsComponent;
  let fixture: ComponentFixture<AzurelabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzurelabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzurelabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
