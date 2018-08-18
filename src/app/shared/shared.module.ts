import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navs/navbar/navbar.component';
import { FooterComponent } from './navs/footer/footer.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const SHARED_COMPONENTS_MODULES = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

@NgModule({
  imports: [
    CommonModule,
    ...SHARED_COMPONENTS_MODULES
  ],
  exports: [
    ...SHARED_COMPONENTS_MODULES,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  declarations: [NavbarComponent, FooterComponent, NotFoundComponent]
})
export class SharedModule { }
