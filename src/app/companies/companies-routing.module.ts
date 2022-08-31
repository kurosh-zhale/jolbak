import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list/production',
  },
  {
    path: 'list/:type',
    component: CompaniesListComponent,
  },
  {
    path: 'detail/:id',
    component: CompanyDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
