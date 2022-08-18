import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const screenshot = atom<any>({
  key: "screenshot",
  default: null,
});
export const useScreenshotState = () => useRecoilState(screenshot);
export const useScreenshotValue = () => useRecoilValue(screenshot);
export const useScreenshotSetter = () => useSetRecoilState(screenshot);
