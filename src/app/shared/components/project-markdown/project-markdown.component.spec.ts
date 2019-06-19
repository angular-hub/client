import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMarkdownComponent } from './project-markdown.component';

describe('ProjectMarkdownComponent', () => {
  let component: ProjectMarkdownComponent;
  let fixture: ComponentFixture<ProjectMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
