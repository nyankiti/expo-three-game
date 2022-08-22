import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const rounds = atom<number>({
  key: "rounds",
  default: 0,
});
export const useRoundsState = () => useRecoilState(rounds);
export const useRoundsValue = () => useRecoilValue(rounds);
export const useRoundsSetter = () => useSetRecoilState(rounds);
