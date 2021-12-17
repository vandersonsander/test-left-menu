import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TesteComponent } from "./teste-component/teste.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OrderModule } from "ngx-order-pipe";
import { PaginationComponent } from "./pagination/pagination.component";
import { ItemComponent } from "./item/item.component";
import { LeftMenuComponent } from "./left-menu/left-menu.component";
// import { NgxMaskModule } from "ngx-mask";
// import { SignaturePadModule } from "ngx-signaturepad";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    OrderModule
    // NgxMaskModule.forRoot(),
    // SignaturePadModule
  ],
  declarations: [AppComponent, TesteComponent, PaginationComponent, LeftMenuComponent, ItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
