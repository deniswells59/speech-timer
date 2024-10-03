import { saveSoundType } from '@/utils/localStorage';
import SOUND_TYPES from '../constants/soundTypes';

export const data = {
  showTimer: true,
  sound: SOUND_TYPES.PING,
};

export const methods = {
  toggleTimer() {
    this.showTimer = !this.showTimer;
  },
  setSound(soundType, muted = false) {
    this.sound = soundType;
    saveSoundType(soundType);

    this.setAudio();

    if (!muted) {
      this.playAudio();
    }
  },
};
