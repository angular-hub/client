import { Component, OnInit, } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import Library from '../../models/library/library.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-markdown',
  templateUrl: './project-markdown.component.html',
  styleUrls: ['./project-markdown.component.scss']
})
export class ProjectMarkdownComponent implements OnInit {
  constructor(protected dialogRef: NbDialogRef<ProjectMarkdownComponent>, private router: Router) { }
  public title: string;
  public markdown: string;
  public library: Library;


  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  goToProjectPage(library: Library) {
    console.log('I will visit said link', library.link);
    // this.router.navigate([link], {})
  }
}
