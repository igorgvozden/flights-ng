import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@NgModule({
  providers: [AppService],
  imports: [],
  exports: [],
})
export class ApiModule {
  static forRoot(): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
    };
  }

  constructor(@SkipSelf() @Optional() http: HttpClient) {}
}
