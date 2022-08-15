import { atom, useRecoilState } from "recoil";

export const muted = atom<number>({
  key: "muted",
  default: 0,
});
export const useMutedState = () => useRecoilState(muted);
