import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPackageComponent } from './submit-package.component';

describe('SubmitPackageComponent', () => {
  let component: SubmitPackageComponent;
  let fixture: ComponentFixture<SubmitPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
