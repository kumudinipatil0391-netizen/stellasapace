import { Routes } from '@angular/router';
import pageContent from '../libs/pages/en.json';
import { AboutPageComponent } from '../libs/pages/about/about-page.component';
import { ApproachPageComponent } from '../libs/pages/approach/approach-page.component';
import { BasicsPageComponent } from '../libs/pages/basics/basics-page.component';
import { BlogArticlePageComponent } from '../libs/pages/blogs/blog-article-page.component';
import { BlogsPageComponent } from '../libs/pages/blogs/blogs-page.component';
import { ConsultationsPageComponent } from '../libs/pages/consultations/consultations-page.component';
import { HomePageComponent } from '../libs/pages/home/home-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'focus' },
  { path: 'focus', component: HomePageComponent, title: pageContent.routeTitles.home },
  { path: 'home', pathMatch: 'full', redirectTo: 'focus' },
  { path: 'home/blogs', component: BlogsPageComponent, title: pageContent.routeTitles.blogs },
  { path: 'home/blogs/:slug', component: BlogArticlePageComponent, title: pageContent.routeTitles.blogArticle },
  { path: 'approach', component: ApproachPageComponent, title: pageContent.routeTitles.approach },
  { path: 'mandala', component: BasicsPageComponent, title: pageContent.routeTitles.mandala },
  { path: 'new', redirectTo: 'mandala' },
  { path: 'consult', component: ConsultationsPageComponent, title: pageContent.routeTitles.consultations },
  { path: 'about', component: AboutPageComponent, title: pageContent.routeTitles.about },
  { path: '**', redirectTo: 'focus' }
];