import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SectionsComponent } from './layout/sections/sections.component';
import { BannerComponent } from './layout/sections/banner/banner.component';
import { ServicesComponent } from './layout/sections/services/services.component';
import { AboutComponent } from './layout/sections/about/about.component';
import { ProjectsComponent } from './layout/sections/projects/projects.component';
import { TestimonialsComponent } from './layout/sections/testimonials/testimonials.component';
import { ContactComponent } from './layout/sections/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SectionsComponent,
    BannerComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
