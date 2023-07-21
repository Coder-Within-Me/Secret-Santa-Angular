import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GameoperationComponent } from './GameOperation/gameoperation.component';
import { PagenotfoundComponent } from './shared/PageNotFound/pagenotfound.component';

const routes: Routes = [
  { path : "", redirectTo: 'gameoperation/home', pathMatch: 'full' },
  {
  path: 'auth',
  component: AuthComponent,
  loadChildren: () => import('./auth/auth.module').then((s) => s.AuthModule)
  },

  {
  path: 'gameoperation',
  component: GameoperationComponent,
  loadChildren: () => import('./GameOperation/game-operation.module').then((s) => s.GameOperationModule)
  },
  { path : '**', component : PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
