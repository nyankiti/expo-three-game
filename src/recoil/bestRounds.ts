import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const bestRounds = atom<number>({
  key: "bestRounds",
  default: 0,
});
export const useBestRoundsState = () => useRecoilState(bestRounds);
export const useBestRoundsValue = () => useRecoilValue(bestRounds);
export const useBestRoundsSetter = () => useSetRecoilState(bestRounds);
