import { reactive } from 'vue';

import { data as timerData, methods as timerMethods } from './timer';
import { data as audioData, methods as audioMethods } from './audio';

export const store = reactive({
  data() {
    return {
      ...timerData,
      ...audioData,
    };
  },
  ...timerMethods,
  ...audioMethods,
});
