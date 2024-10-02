import moment from 'moment';
import { reactive } from 'vue';

// The delay after the user clicks to start the timer
// (This makes for a better UX where the user can easily see the initial
//  start time before the countdown begins)
const INPUT_DELAY_IN_MS = 1200;

// How often we check the time
const TIMER_INTERVAL_IN_MS = 100;

export const store = reactive({
  data() {
    return {
      minutes: null,
      seconds: null,
      interval: null,
      countDownDate: null,
    };
  },
  resetTimer() {
    this.minutes = null;
    this.seconds = null;
    clearInterval(this.interval);
  },
  startTimer(timeinMinutes) {
    this.resetTimer();
    this.initTimer(timeinMinutes);

    setTimeout(() => {
      // Calculates when timer should end
      this.countDownDate = moment().add(timeinMinutes, 'm').toDate();

      this.interval = setInterval(() => {
        this.setTimerOnInterval();
      }, TIMER_INTERVAL_IN_MS);

      // Call the timer while we wait for our interval
      // fixes edge case where a second appears to be skipped due while
      // waiting for initial interval time
      this.setTimerOnInterval();
    }, INPUT_DELAY_IN_MS);
  },
  // Shows initial time
  initTimer(timeInMinutes) {
    this.minutes = timeInMinutes;
  },
  //
  setTimerOnInterval() {
    const now = moment();
    const diff = this.countDownDate - now;

    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.minutes = minutes;
    this.seconds = seconds;

    if (this.minutes <= 0 && this.seconds <= 0) {
      this.resetTimer();
    }
  },
});
