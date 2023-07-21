import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GameoperationRoutingModule } from './gameoperation-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

import { AddPLayersComponent } from '../GameOperation/components/AddPlayers/add-players/add-players.component';
import { GameoperationComponent } from './gameoperation.component';
import { ChildWishlistComponent } from './components/ChildWishlist/child-wishlist/child-wishlist.component';
import { DrawPlayerComponent } from './components/DrawPlayer/draw-player/draw-player.component';
import { YourWishlistComponent } from './components/YourWishlist/your-wishlist/your-wishlist.component';
import { HomeComponent } from './components/Home/home.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AddPLayersComponent,
    GameoperationComponent,
    ChildWishlistComponent,
    DrawPlayerComponent,
    YourWishlistComponent,
    HomeComponent,
    GroupDetailsComponent,
    GroupMembersComponent,
    MessagesComponent,
    
  ],
  imports: [
    CommonModule,
    GameoperationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  exports:[
    AddPLayersComponent,
  ]
})
export class GameOperationModule { }
