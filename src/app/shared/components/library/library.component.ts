import { ProjectMarkdownComponent } from './../project-markdown/project-markdown.component'
import { Component, OnInit, Input } from '@angular/core';
import Library from '../../models/library/library.model';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }
  // tslint:disable-next-line: max-line-length
  @Input() library: Library = { name: 'ng-bootstrap', stars: 1090, description: '  The best angular library possible', downloads: 9000 };

  ngOnInit() {
  }

  showProjectMarkdown() {
    this.dialogService.open(ProjectMarkdownComponent, {
      context: {
        title: 'Title',
        mardown: 'Nothing do so far'
      },
    });
  }
}
