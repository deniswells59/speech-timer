import SOUND_TYPES from '@/constants/soundTypes';
const LOCALSTORAGE_SETTINGS_KEY = '__save_settings';

const DEFAULT_SETTINGS = {
  soundType: SOUND_TYPES.PING,
};

export const getSettings = () => {
  const settingsString = localStorage.getItem(LOCALSTORAGE_SETTINGS_KEY);

  if (settingsString) {
    const parsed = JSON.parse(settingsString);
    return parsed;
  } else {
    return DEFAULT_SETTINGS;
  }
};

export const getSoundType = () => {
  return getSettings().soundType;
};

export const saveSoundType = (soundType) => {
  const currentSettings = getSettings();

  const newSettings = {
    ...currentSettings,
    soundType,
  };

  const stringified = JSON.stringify(newSettings);

  localStorage.setItem(LOCALSTORAGE_SETTINGS_KEY, stringified);
};
