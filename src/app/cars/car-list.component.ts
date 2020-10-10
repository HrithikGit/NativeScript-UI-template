import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-ui-listview";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { ObservableArray } from "tns-core-modules/data/observable-array";

import { Car } from "./shared/car.model";
import { CarService } from "./shared/car.service";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "CarsList",
    templateUrl: "./car-list.component.html",
    styleUrls: ["./_car-list.component.scss"]
})
export class CarListComponent implements OnInit, OnDestroy {
    private _isLoading: boolean = false;
    private _cars: ObservableArray<Car> = new ObservableArray<Car>([]);
    private _dataSubscription: Subscription;

    constructor(
        private _carService: CarService,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        if (!this._dataSubscription) {
            this._isLoading = true;

            this._dataSubscription = this._carService.load()
                .pipe(finalize(() => this._isLoading = false))
                .subscribe((cars: Array<Car>) => {
                    this._cars = new ObservableArray(cars);
                    this._isLoading = false;
                });
        }
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    ngOnDestroy(): void {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }

    get cars(): ObservableArray<Car> {
        return this._cars;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    onCarItemTap(args: ListViewEventData): void {
        const tappedCarItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/cars/car-detail", tappedCarItem.id],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            }); 
    }
}
