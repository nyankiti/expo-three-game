import { atom, useRecoilState, useRecoilValue } from "recoil";

export const muted = atom<boolean>({
  key: "muted",
  default: false,
});
export const useMutedState = () => useRecoilState(muted);
export const useMutedValue = () => useRecoilValue(muted);
