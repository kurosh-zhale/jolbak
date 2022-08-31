import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

@NgModule({
  declarations: [CompaniesListComponent, CompanyDetailComponent],
  imports: [CommonModule, CompaniesRoutingModule, SharedModule],
})
export class CompaniesModule {}
