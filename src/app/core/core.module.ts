import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTokenInterceptor } from './interceptors/add-token.interceptor';
import { SETTING_CONFIG_TOKEN } from './injectors/setting-config.injector';

const SETTING_CONFIG = {
  serverUrl: 'http://localhost',
};

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true,
    },
    {
      provide: SETTING_CONFIG_TOKEN,
      useValue: SETTING_CONFIG,
    },
  ],
})
export class CoreModule {}
