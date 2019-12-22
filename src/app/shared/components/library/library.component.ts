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
  @Input() public library: Library = {
    name: 'ng-bootstrap',
    stars: 1090,
    description: 'The best angular library possible',
    downloads: 9000,
    version: '12.0',
    by: '@mikepod'
  };

  ngOnInit() {
  }

  showProjectMarkdown() {
    this.dialogService.open(ProjectMarkdownComponent, {
      context: {
        // title: 'Title',
        markdown: 'Nothing do so far',
        library: this.library
      },
    });
  }
}
