import { reactive } from 'vue';

import { data as timerData, methods as timerMethods } from './timer';

export const store = reactive({
  data() {
    return {
      ...timerData,
    };
  },
  ...timerMethods,
});
