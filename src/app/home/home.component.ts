import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  public searchQuery: string;
  public items = Array.from({ length: 20 }).fill('');

  ngOnInit() {
  }

  public getCurrParams(params: Params) {
    console.log(': HomeComponent -> getCurrParams -> params', params)
  }

  public getSearchQuery(query) {
    this.router.navigate(['/'], {
      queryParamsHandling: 'merge',
      queryParams: { search: query }
    }).then(_ => this.searchQuery = '');
    this.route.queryParams.subscribe(console.log)
  }
}
