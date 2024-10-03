const AUDIO_ID = 'jukebox';
const AUDIO_SOURCE_ID = 'audioSource';

export const data = {
  playlist: [
    {
      timestamp: {
        minutes: 0,
        seconds: 0,
        count: 1,
      },
      played: false,
    },
  ],
};

export const methods = {
  setPlaylist(timestamps) {
    this.playlist = timestamps.map((ts) => ({
      timestamp: { ...ts },
      played: false,
    }));

    this.playAudio();
  },
  /**
   * TODO: I don't think Vue likes me updating state this often (every ~100 ms)
   */
  checkPlaylist() {
    // Check each playlist timestamp
    this.playlist = this.playlist.map((queueItem) => {
      // If the timestamp matches current timer
      // And hasn't been played yet
      if (
        !queueItem.played &&
        queueItem.timestamp.minutes === this.minutes &&
        queueItem.timestamp.seconds === this.seconds
      ) {
        const playcount = queueItem.timestamp.count || 1;
        this.playAudio(playcount);

        // Set playlist item's 'played' flag
        return {
          ...queueItem,
          played: true,
        };
      } else {
        return queueItem;
      }
    });
  },
  setAudio() {
    const audio = document.getElementById(AUDIO_ID);
    const source = document.getElementById(AUDIO_SOURCE_ID);
    source.src = `/sounds/${this.sound}`;

    audio.load();
  },
  playAudio(playCount) {
    const audio = document.getElementById(AUDIO_ID);
    let counter = 0;

    const audioEndedEventHandler = () => {
      counter++;
      if (counter < playCount) {
        audio.play();
      } else {
        audio.removeEventListener('ended', audioEndedEventHandler);
      }
    };

    // Supports playing audio more than once to highlight specific time
    audio.addEventListener('ended', audioEndedEventHandler);

    audio.play();
  },
};
