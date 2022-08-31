import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SearchDialogComponent } from './header/search-dialog/search-dialog.component';

const materialModules = [MatMenuModule, MatDialogModule];

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideNavComponent, SearchDialogComponent],
  imports: [CommonModule, ...materialModules],
  exports: [HeaderComponent, FooterComponent, SideNavComponent],
})
export class LayoutModule {}
