import * as React from "react";
// import { connect } from "react-redux";
/* recoil */
import { useMutedValue } from "../recoil/muted";
import AudioManager from "../AudioManager";

function Song() {
  const muted = useMutedValue();

  React.useEffect(() => {
    if (muted) {
      AudioManager.pauseAsync("song");
    } else {
      AudioManager.playAsync("song", true);
    }
    return () => {
      AudioManager.stopAsync("song");
    };
  }, [muted]);

  return null;
}

export default Song;
