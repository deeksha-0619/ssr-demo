import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'alpha', loadChildren: () => import('./alpha/alpha.module').then(m => m.AlphaModule) },
  { path: 'gamma', loadChildren: () => import('./gamma/gamma.module').then(m => m.GammaModule) },
  { path: 'beta', loadChildren: () => import('./beta/beta.module').then(m => m.BetaModule) },
  { path: 'delta', loadChildren: () => import('./delta/delta.module').then(m => m.DeltaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
