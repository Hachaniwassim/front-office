import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from "./notfound/notfound.component";
import { MaterialModule } from './material/material.module';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { ResetpasswordComponent } from "./resetpassword/resetpassword.component";
import { RegisterComponent } from "./register/register.component";
import { AboutComponent } from "./about/about.component";
import { UsefullLinksComponent } from "./usefull-links/usefull-links.component";
import { ContactComponent } from "./contact/contact.component";
import { CookiesComponent } from "./cookies/cookies.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { AssitanceComponent } from "./assitance/assitance.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from './guard/auth.guard';
import { NwesListComponent } from './nwes-list/nwes-list.component';
import { CategoryComponent } from './category/category.component';
import { RefrenceComponent } from './refrence/refrence.component';
import { SellersComponent } from './sellers/sellers.component';
import { CookiesNotifierComponent } from './cookies-notifier/cookies-notifier.component';


const routes: Routes = [



  { path: "home", component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //home


  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

  //About
  { path: 'about', component: AboutComponent },
  { path :'sellers', component :SellersComponent},

  { path: 'usefulllinks', component: UsefullLinksComponent },


  { path: 'contact', component: ContactComponent },

  { path: 'cookies', component: CookiesComponent },

  { path: 'privacypolicy', component: PrivacyPolicyComponent },

  { path: 'nwes', component: NwesListComponent },

  { path: 'assistance', component: AssitanceComponent },

  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  {path : 'category', component : CategoryComponent},

  {path : 'refrence', component : RefrenceComponent},




  // 404 not found
  { path: '**', component: NotfoundComponent },

]


@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule, MaterialModule]
})
export class AppRoutingModule { }
