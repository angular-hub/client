import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public searchQuery: string;

  ngOnInit() {
  }

  getLibrariesByCategory(category: string) {
    console.log(category)
  }

  getSearchQuery(stuff) {
    console.log(stuff)
    this.searchQuery = ''
  }

}
