import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPLayersComponent } from './components/AddPlayers/add-players/add-players.component';
import { ChildWishlistComponent } from './components/ChildWishlist/child-wishlist/child-wishlist.component';
import { DrawPlayerComponent } from './components/DrawPlayer/draw-player/draw-player.component';
import { YourWishlistComponent } from './components/YourWishlist/your-wishlist/your-wishlist.component';
import { HomeComponent } from './components/Home/home.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'groupdetails', component: GroupDetailsComponent },
  { path: 'addplayer', component: AddPLayersComponent },
  { path: 'childwishlist', component: ChildWishlistComponent },
  { path: 'drawplayer', component: DrawPlayerComponent },
  { path: 'yourwishlist', component: YourWishlistComponent },
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class GameoperationRoutingModule { }
