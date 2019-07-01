import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: max-line-length
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbInputModule, NbButtonModule, NbSpinnerModule, NbSearchModule, NbDialogModule, } from '@nebular/theme';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { LibraryComponent } from './shared/components/library/library.component';
import { SlangNoPipe } from './shared/pipes/slang-no.pipe';
import { ProjectMarkdownComponent } from './shared/components/project-markdown/project-markdown.component';
import { SubmitPackageComponent } from './submit-package/submit-package.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CategoriesComponent,
    HomeComponent,
    SidebarComponent,
    LibraryComponent,
    SlangNoPipe,
    ProjectMarkdownComponent,
    SubmitPackageComponent,
  ],
  entryComponents: [ProjectMarkdownComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,
    NbSearchModule,
    NbDialogModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NbMenuModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
