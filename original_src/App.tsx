import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { RecoilRoot } from "recoil";
import * as Font from "expo-font";
// import * as Analytics from "expo-firebase-analytics";
import AudioManager from "./AudioManager";
import Navigation from "./Navigation";

// @ts-ignore
const getNow = global.nativePerformanceNow ?? Date.now;

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
    // firebaseの設定(firebaseの実装は省略する)
    // Fire.init();
    (async () => {
      console.time("Setup");
      let time = getNow();
      try {
        await Promise.all([
          Font.loadAsync({
            "GothamNarrow-Book": require("../assets/fonts/GothamNarrow-Book.ttf"),
          }),
          AudioManager.setupAsync(),
        ]);
      } catch (error) {
        console.log("Error loading fonts and audio!");
        // Analytics.logEvent("error_loading_assets", { error });
        console.error(error);
      } finally {
        const total = getNow() - time;
        // Analytics.logEvent("assets_loaded", { milliseconds: total });
        console.timeEnd("Setup");
      }
      setLoading(false);
    })();
  }, []);
  return (
    <RecoilRoot>
      <ActionSheetProvider>
        <Navigation />
      </ActionSheetProvider>
    </RecoilRoot>
  );
}
