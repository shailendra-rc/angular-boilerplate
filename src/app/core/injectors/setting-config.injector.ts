import { InjectionToken } from '@angular/core';
import { SettingConfig } from '../interfaces/setting-config.interface';

export const SETTING_CONFIG_TOKEN = new InjectionToken<SettingConfig>(
  'SettingConfig'
);
