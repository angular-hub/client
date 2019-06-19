import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme'
@Component({
  selector: 'app-project-markdown',
  templateUrl: './project-markdown.component.html',
  styleUrls: ['./project-markdown.component.scss']
})
export class ProjectMarkdownComponent implements OnInit {
  title: string;
  mardown: string;
  constructor(protected dialogRef: NbDialogRef<ProjectMarkdownComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close()
  }

}
