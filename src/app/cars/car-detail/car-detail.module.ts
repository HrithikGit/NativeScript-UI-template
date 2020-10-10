import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { CarDetailRoutingModule } from "./car-detail-routing.module";
import { CarDetailComponent } from "./car-detail.component";

import { CarDetailEditComponent } from "./car-detail-tab/car-detail-edit/car-detail-edit.component";
import { MyImageAddRemoveComponent } from "./car-detail-tab/car-detail-edit/my-image-add-remove/my-image-add-remove.component";
import { MyListSelectorModalViewComponent } from "./car-detail-tab/car-detail-edit/my-list-selector/my-list-selector-modal-view.component"; // tslint:disable-line:max-line-length
import { MyListSelectorComponent } from "./car-detail-tab/car-detail-edit/my-list-selector/my-list-selector.component";


@NgModule({
    bootstrap: [
        CarDetailComponent
    ],
    imports: [
        CarDetailRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
        
    ],
    declarations: [
        NativeScriptModule,
        CarDetailRoutingModule,
        CarDetailComponent,
        CarDetailEditComponent,
        MyListSelectorComponent,
        MyListSelectorModalViewComponent,
        MyImageAddRemoveComponent
       
    ],
    entryComponents: [
        MyListSelectorModalViewComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
