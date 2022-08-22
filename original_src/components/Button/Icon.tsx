import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import AudioManager from "../../AudioManager";
import { TouchableOpacity } from "react-native";
/* recoil */
import { useMutedValue } from "../../recoil/muted";

export default function Icon({
  onPress = () => {},
  size = 24,
  color = "#fff",
  name,
  soundOut = "button_out",
  soundIn = "button_in",
  style,
  iconStyle,
}: any) {
  const muted = useMutedValue();
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => AudioManager.playAsync(soundIn, muted)}
      onPressOut={() => AudioManager.playAsync(soundOut, muted)}
      style={[styles.container, style]}
    >
      <FontAwesome
        size={size}
        color={color}
        name={name}
        style={[styles.icon, iconStyle]}
      />
    </TouchableOpacity>
  );
}

const size = 56;

const styles = StyleSheet.create({
  container: {
    width: size,
    minWidth: size,
    height: size,
    minHeight: size,
    maxHeight: size,
    backgroundColor: "transparent",
    borderBottomWidth: 3,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  icon: {
    backgroundColor: "transparent",
    // @ts-ignore
    marginBottom: Platform.select({ web: "1rem", default: 0 }),
  },
});
