import moment from 'moment';
import { reactive } from 'vue';

export const store = reactive({
  data() {
    return {
      minutes: null,
      seconds: null,
      interval: null,
    };
  },
  resetTimer() {
    this.minutes = null;
    this.seconds = null;
    clearInterval(this.interval);
  },
  setTimer(timeinMinutes) {
    this.resetTimer();
    const countDownDate = moment().add(timeinMinutes, 'm').toDate();
    console.log('start');
    this.interval = setInterval(() => {
      const now = moment();
      const diff = countDownDate - now;

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      this.minutes = minutes;
      this.seconds = seconds;
    }, 10);
  },
  setInterval() {
    this.interval = setInterval(() => {
      this.timer = this.timer - 1;
    }, 1000);

    console.log(this.interval);
  },
});
