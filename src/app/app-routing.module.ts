import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitPackageComponent } from './submit-package/submit-package.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'submit-package',
    component: SubmitPackageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
