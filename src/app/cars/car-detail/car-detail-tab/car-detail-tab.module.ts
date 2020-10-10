import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CarDetailTabRoutingModule } from "./car-detail-tab-routing.module";
import { CarDetailTabComponent } from "./car-detail-tab.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CarDetailTabRoutingModule
    ],
    declarations: [
        CarDetailTabComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CarDetailTabModule { }
