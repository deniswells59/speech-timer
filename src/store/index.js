import { reactive } from 'vue';

import { data as timerData, methods as timerMethods } from './timer';
import { data as audioData, methods as audioMethods } from './audio';
import { data as settingsData, methods as settingsMethods } from './settings';

export const store = reactive({
  ...timerData,
  ...audioData,
  ...settingsData,
  ...timerMethods,
  ...audioMethods,
  ...settingsMethods,
});
