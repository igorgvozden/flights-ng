import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonToggleComponent } from "./button-toggle.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { ButtonTitlePipe } from "../../pipes/button-title.pipe";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations: [ButtonToggleComponent, ButtonTitlePipe],
    imports: [CommonModule, AppRoutingModule, MatButtonToggleModule],
    exports: [ButtonToggleComponent]
})
export class ButtonToggleModule {}