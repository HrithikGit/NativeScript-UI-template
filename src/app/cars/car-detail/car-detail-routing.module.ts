import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(carDetailTab:car-detail-tab/default//browseTab:browse-tab/default//searchTab:search-tab/default)",
        pathMatch: "full"
    }
/* 
    {
        path: "cardetailtab",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("./car-detail-tab/car-detail-tab.module").then((m) => m.CarDetailTabModule),
        outlet: "carDetailTab"
    } ,
    {
        path: "browsetab",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("./browse-tab/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab"
    },
    {
        path: "searchtab",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("./search-tab/search.module").then((m) => m.SearchModule),
        outlet: "searchTab"
    }
 */];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class CarDetailRoutingModule { }
