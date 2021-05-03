import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductItemComponent} from './components/shopping-cart/product-list/product-item/product-item.component';
import {ProductListComponent} from './components/shopping-cart/product-list/product-list.component';
import {CategoryComponent} from './components/shopping-cart/category/category.component';
import {ProductDetailComponent} from './components/shopping-cart/product-list/product-detail/product-detail.component';
import {EditproductComponent} from './components/cabinet/adminpage/editproduct/editproduct.component'
import {AdminpageComponent} from './components/cabinet/adminpage/adminpage.component'
import {EditComponent} from './components/cabinet/adminpage/edit/edit.component'
import {AddComponent} from './components/cabinet/adminpage/add/add.component'
import { from } from 'rxjs';
import { DeleteComponent } from './components/cabinet/adminpage/delete/delete.component';
import {UsersComponent} from './components/cabinet/adminpage/users/users.component';
import {SigninpageComponent} from './components/cabinet/signinpage/signinpage.component';

const routes: Routes = [
  {path: 'categories', component:CategoryComponent},
  {path: 'categories/:id/products', component:ProductListComponent},
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'adminpage', component: AdminpageComponent},
  {path: 'adminpage/editproduct/:id', component: EditproductComponent},
  {path: 'adminpage/edit', component: EditComponent},
  {path: 'adminpage/add', component: AddComponent},
  {path: 'adminpage/delete', component: DeleteComponent},
  {path: 'adminpage/users', component: UsersComponent},
  {path: 'signinpage', component: SigninpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
