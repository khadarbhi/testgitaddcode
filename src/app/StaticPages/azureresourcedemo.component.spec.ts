import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureresourcedemoComponent } from './azureresourcedemo.component';

describe('AzureresourcedemoComponent', () => {
  let component: AzureresourcedemoComponent;
  let fixture: ComponentFixture<AzureresourcedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureresourcedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureresourcedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
