import "zone.js";
import "reflect-metadata";
import "es6-shim";
import "core-js";

import "@ng-bootstrap/ng-bootstrap";

import "../jspm_packages/github/twbs/bootstrap@4.0.0-alpha.3/css/bootstrap.css!css";
import "../jspm_packages/npm/font-awesome@4.6.3/css/font-awesome.css!css";
import "../jspm_packages/npm/reset-css@2.0.20160720/reset.css!css";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
