import SOUND_TYPES from '../constants/soundTypes';

export const data = {
  showTimer: true,
  sound: SOUND_TYPES.PING,
};

export const methods = {
  toggleTimer() {
    this.showTimer = !this.showTimer;
  },
  setSound(soundType) {
    this.sound = soundType;
    this.setAudio();
    this.playAudio();
  },
};
