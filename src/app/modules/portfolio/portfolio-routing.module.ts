import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { SkillComponent } from './pages/skill/skill.component';
import { AhsanComponent } from './pages/specialists/ahsan/ahsan.component';
import { ArifulIslamMiahComponent } from './pages/specialists/ariful-islam-miah/ariful-islam-miah.component';
import { SpecialistsComponent } from './pages/specialists/specialists.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      // {
      //   path: 'specialists',
      //   component: SpecialistsComponent,
      // },
      // {
      //   path: 'services',
      //   component: OurServicesComponent,
      // },
      {
        path: 'skills',
        component: SkillComponent,
      },
      
      {
        path: 'project',
        component: GalleryComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      // {
      //   path: 'ahsan',
      //   component: AhsanComponent,
      // },
      // {
      //   path: 'ariful-islam-miah',
      //   component: ArifulIslamMiahComponent,
      // },
      
      { path: '', redirectTo: '',  component: HomeComponent, pathMatch: 'full' },
    ],
  },
];
RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
