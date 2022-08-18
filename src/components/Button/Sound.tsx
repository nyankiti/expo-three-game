import { dispatch } from "../../rematch/store";
import * as React from "react";
import Icon from "./Icon";
import { useMutedValue } from "../../recoil/muted";

function SoundButton() {
  const muted = useMutedValue();
  const onPress = React.useMemo(
    () => () => {
      dispatch.muted.toggle();
    },
    []
  );

  return <Icon onPress={onPress} name={muted ? "volume-off" : "volume-up"} />;
}

export default SoundButton;
