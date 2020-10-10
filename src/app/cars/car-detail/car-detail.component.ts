import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { alert } from "tns-core-modules/ui/dialogs";

import { CarEditService } from "../shared/car-edit.service";
import { Car } from "../shared/car.model";
import { CarService } from "../shared/car.service";
import { carClassList, carDoorList, carSeatList, carTransmissionList } from "./car-detail-tab/constants";

@Component({
    selector: "CarDetail",
    templateUrl: "./car-detail.component.html"
})


export class CarDetailComponent implements OnInit {
    private _car: Car;
    
    constructor(
        private _carService: CarService,
        private _carEditService: CarEditService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions 
    ) { }

     ngOnInit(): void {       
       this._pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                const carId = params.id;

                this._car = this._carEditService.startEdit(carId);
            });
    }
    get car(): Car {
        return this._car;
    }
    onBackButtonTap(): void {
        this._routerExtensions.backToPreviousPage();
    }
   /* onEditSelected():void{
         this._routerExtensions.navigate(["/cars/car-detail", this._car.id],
        {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        }); */
    }
