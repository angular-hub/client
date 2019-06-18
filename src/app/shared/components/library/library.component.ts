import { Component, OnInit, Input } from '@angular/core';
import Library from '../../models/library/library.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }
  @Input() library: Library;

  ngOnInit() {
  }

}
