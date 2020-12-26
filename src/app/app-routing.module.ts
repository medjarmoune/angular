import { AfterAuthGuard } from './guards/after-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/parials/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", redirectTo:'/address', pathMatch:'full', canActivate:[AuthGuard]},
  { path:"address", children:[
      { path:"", component: ListAddressComponent},
      { path:"create", component: AddAddressComponent},
      { path:"edit/:id", component: EditAddressComponent},
    ], canActivate:[AuthGuard]
  },
  { path:"login", component: LoginComponent, canActivate:[AfterAuthGuard] },
  { path:"**", component: PageNotFoundComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
