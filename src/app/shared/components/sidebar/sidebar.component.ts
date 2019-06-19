import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  constructor(private router: Router, public route: ActivatedRoute) { }
  public params: Params;
  @Output() currParamsEvent = new EventEmitter<Params>();

  public categories: NbMenuItem[] = [
    { title: 'All', link: '/', queryParams: { category: 'all' } },
    { title: 'A11y', link: '/', queryParams: { category: 'a11y' } },
    { title: 'Animation', link: '/', queryParams: { category: 'animation' } },
    { title: 'Boilerplates', link: '/', queryParams: { category: 'boilerplate' } },
    { title: 'Data Flow', link: '/', queryParams: { category: 'data-flow' } },
    { title: 'Data Viz', link: '/', queryParams: { category: 'data-viz' } },
    { title: 'I18n', link: '/', queryParams: { category: 'i18n' } },
    { title: 'Icons', link: '/', queryParams: { category: 'icons' } },
    { title: 'Images', link: '/', queryParams: { category: 'images' } },
    { title: 'Layout', link: '/', queryParams: { category: 'layout' } },
    { title: 'Modals', link: '/', queryParams: { category: 'modals' } },
    { title: 'Optimizations', link: '/', queryParams: { category: 'optimization' } },
    { title: 'Media', link: '/', queryParams: { category: 'media' } },
    { title: 'Practices', link: '/', queryParams: { category: 'practices' } },
    { title: 'Rendering', link: '/', queryParams: { category: 'rendering' } },
    { title: 'Responsive', link: '/', queryParams: { category: 'responsive' } },
    { title: 'Setup', link: '/', queryParams: { category: 'setup' } },
    { title: 'Styling', link: '/', queryParams: { category: 'styling' } },
    { title: 'Testing', link: '/', queryParams: { category: 'testing' } },
    { title: 'Transforms', link: '/', queryParams: { category: 'transform' } },
  ];


  getParams(item) {
    this.route.queryParams.subscribe(param => this.params = param);
    this.currParamsEvent.emit(this.params);
    this.router.navigate([item.link], {
      queryParams: { ...item.queryParams },
      queryParamsHandling: 'merge',
    })
  }
}
