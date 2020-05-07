import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './services/auth.guard';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prices', component: PricesComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

