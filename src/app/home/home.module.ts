import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CaroselComponent } from './components/carosel/carosel.component';
import { CaroselHolderComponent } from './components/carosel/carosel-holder/carosel-holder.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { PublishmentsComponent } from './components/publishments/publishments.component';
import { LinksComponent } from './components/links/links.component';

@NgModule({
  declarations: [HomeComponent, CaroselComponent, CaroselHolderComponent, CompaniesComponent, PublishmentsComponent, LinksComponent],
  imports: [CommonModule, HomeRoutingModule, SwiperModule],
})
export class HomeModule {}
