import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BookAppointmentComponent } from './common/book-appointment/book-appointment.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SliderComponent } from './common/slider/slider.component';
import { QuickLinkComponent } from './common/quick-link/quick-link.component';
import { SpecialistsListComponent } from './common/specialists-list/specialists-list.component';
import { DepartmentListComponent } from './common/department-list/department-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SpecialistsComponent } from './pages/specialists/specialists.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AhsanComponent } from './pages/specialists/ahsan/ahsan.component';
import { ArifulIslamMiahComponent } from './pages/specialists/ariful-islam-miah/ariful-islam-miah.component';
import { SkillComponent } from './pages/skill/skill.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BookAppointmentComponent,
    SliderComponent,
    QuickLinkComponent,
    SpecialistsListComponent,
    DepartmentListComponent,
    AboutUsComponent,
    SpecialistsComponent,
    OurServicesComponent,
    GalleryComponent,
    ContactComponent,
    AhsanComponent,
    ArifulIslamMiahComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
