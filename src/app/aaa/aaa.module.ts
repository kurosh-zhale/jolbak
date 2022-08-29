import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AAARoutingModule } from './aaa-routing.module';

/**App Modules */
import { ReactiveFormsModule } from '@angular/forms';

/**Material Modules */
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

/**Components */
import { LoginComponent } from './components/login/login.component';

const MaterialModules = [MatCardModule, MatInputModule];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AAARoutingModule,
    ...MaterialModules,
    ReactiveFormsModule,
  ],
})
export class AAAModule {}
