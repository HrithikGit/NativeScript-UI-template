import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
const routes: Routes = [
    
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    /* { path: "cars", redirectTo: "/cars", pathMatch: "full" }, */
    { path: "cars", loadChildren: () => import("~/app/cars/cars.module").then((m) => m.CarsModule) },
    

    {
        path: "car-detail-tab",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/cars/car-detail/car-detail-tab/car-detail-tab.module").then((m) => m.CarDetailTabModule),
        outlet: "carDetailTab"
    } ,
    {
        path: "browse-tab",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/cars/car-detail/browse-tab/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab"
    },
    {
        path: "search-tab",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/cars/car-detail/search-tab/search.module").then((m) => m.SearchModule),
        outlet: "searchTab"
    }
];

    

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
