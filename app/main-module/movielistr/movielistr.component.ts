import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'movielistr',
    templateUrl: 'movielistr-component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['movielistr.css']
})
export class MovieListr {

    constructor() {
        console.log('in constructor');
    }

}