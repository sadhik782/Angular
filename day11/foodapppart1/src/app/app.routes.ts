import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenudetailsComponent } from './components/menudetails/menudetails.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipedetailsComponent } from './components/recipedetails/recipedetails.component';
import { RxjsfoodmenuComponent } from './components/rxjsfoodmenu/rxjsfoodmenu.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PromobannerComponent } from './components/promobanner/promobanner.component';
import { authGuard } from './auth.guard';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './login/login.component';

//import { BannerComponent } from './components/banner/banner.component';
//import { PromobannerComponent } from './components/promobanner/promobanner.component';
//import { HistoryOfOrdersComponent } from './features/order-history/history-of-orders/history-of-orders.component';
//import { ReOrderFromHistoryOfOrdersComponent } from './features/order-history/re-order-from-history-of-orders/re-order-from-history-of-orders.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactusComponent,canActivate: [authGuard]},
    { path: 'menu', component: MenuComponent },
    { path: 'menudetails/:menuid' , component: MenudetailsComponent},
    { path: 'recipes', component: RecipeComponent },
    { path: 'recipedetails/:recipeid', component: RecipedetailsComponent },
    { path: 'rxjsrecipes', component: RxjsfoodmenuComponent },
    { path: 'signalexample', component: CartItemComponent },
    //{ path: 'promobanner', component: PromobannerComponent },
    { path: 'banner', component: BannerComponent },
    { path: 'contact', component: ContactusComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent},


    {
    path: 'ordermodule',
    loadChildren: () =>   
      import('../app/features/order-history/order-history.module').then(m => m.OrderHistoryModule)
    }
    

    //{ path: 'orderhistory', component: HistoryOfOrdersComponent},
    //{ path: 'reorderfromhistory', component: ReOrderFromHistoryOfOrdersComponent },

];
