import ping from '../assets/sounds/ping.mp3';

export const data = {
  playlist: [
    {
      timestamp: {
        minutes: 0,
        seconds: 0,
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
        this.playAudio();

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
  playAudio() {
    new Audio(ping).play();
  },
};
