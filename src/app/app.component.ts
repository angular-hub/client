import { Router, Params, ActivatedRoute } from '@angular/router'
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {


  constructor(private router: Router, private route: ActivatedRoute) { }
  public searchQuery: string;
  public items = Array.from({ length: 20 }).fill('meh');

  ngOnDestroy(): void {

  }

  public getCurrParams(params: Params) {
    console.log(params);
  }

  public getSearchQuery(query) {
    this.router.navigate(['/'], {
      queryParamsHandling: 'merge',
      queryParams: { search: query }
    }).then(_ => this.searchQuery = '');
    this.route.queryParams.subscribe(console.log)
  }

}
