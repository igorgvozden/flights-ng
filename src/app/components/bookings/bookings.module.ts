import { NgModule } from "@angular/core";
import { BookingsComponent } from "./bookings.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        BookingsComponent
      ],
      imports: [SharedModule],
      exports: [
        BookingsComponent
      ],
})
export class BookingsModule {}