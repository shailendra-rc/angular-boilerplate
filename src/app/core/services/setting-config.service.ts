import { Inject, Injectable } from '@angular/core';
import { SettingConfig } from '../interfaces/setting-config.interface';
import { SETTING_CONFIG_TOKEN } from '../injectors/setting-config.injector';

@Injectable({
  providedIn: 'root',
})
export class SettingConfigService {
  constructor(@Inject(SETTING_CONFIG_TOKEN) private settings: SettingConfig) {}
}
