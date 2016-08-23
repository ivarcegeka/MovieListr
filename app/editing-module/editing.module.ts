import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EditForm} from "./editform/editform.component";
import {FormsModule} from "@angular/forms";
import {DbModule} from "../db-module/db.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule, FormsModule, DbModule, RouterModule],
    declarations: [EditForm],
    exports: [EditForm]
})
export class EditingModule {
}
