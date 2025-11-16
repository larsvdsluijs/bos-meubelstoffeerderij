import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { StoffenComponent } from './pages/stoffen/stoffen.component';
import { DienstenComponent } from './pages/diensten/diensten.component';
import { DoeHetZelfComponent } from './pages/doe-het-zelf/doe-het-zelf.component';
import { OnderhoudComponent } from './pages/onderhoud/onderhoud.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'stoffen', component: StoffenComponent },
  { path: 'diensten', component: DienstenComponent },
  { path: 'doe-het-zelf', component: DoeHetZelfComponent },
  { path: 'onderhoud', component: OnderhoudComponent },
  { path: 'contact', component: ContactComponent },
];
