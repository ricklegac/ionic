import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    //PostsComponent
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ContactComponent,
    //PostsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
