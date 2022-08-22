import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { connect } from "react-redux";
/* recoil */
import { useScoreValue } from "../recoil/score";
import { useCurrencyValue } from "../recoil/currency";
import Settings from "../constants/Settings";

function ScoreMeta() {
  const { top } = useSafeAreaInsets();
  const scoreState = useScoreValue();
  const currency = useCurrencyValue();

  const current = scoreState.current;
  const best = scoreState.best;
  return (
    <View style={[styles.container, { top }]}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.text, styles.highScore]}>{best}</Text>
        <Animatable.Text
          animation="rubberBand"
          key={current}
          style={[styles.text, styles.score]}
        >
          {current}
        </Animatable.Text>
      </View>
      {Settings.gemsEnabled && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.text, styles.currency]}>{currency.current}</Text>
          <FontAwesome
            name="diamond"
            size={20}
            color="lime"
            style={{
              marginHorizontal: 6,
              ...Platform.select({ web: { userSelect: "none" }, default: {} }),
            }}
          />
        </View>
      )}
    </View>
  );
}

// export default connect(
//   ({ score: { current, best }, currency: { current: currency } }) => ({
//     current,
//     best,
//     currency,
//   })
// )(ScoreMeta);
export default ScoreMeta;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "GothamNarrow-Book",
    opacity: 0.8,
    fontSize: 48,
    backgroundColor: "transparent",
    ...Platform.select({ web: { userSelect: "none" }, default: {} }),
  },
  score: {
    color: "white",
  },
  highScore: {
    color: "yellow",
    textAlign: "right",
    fontSize: 24,
    marginRight: 6,
  },
  currency: {
    fontSize: 24,
    color: "white",
  },
});
