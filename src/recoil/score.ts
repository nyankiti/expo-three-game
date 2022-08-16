import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export type ScoreShape = {
  current: number;
  best: number;
  total: number;
  last: number | null;
  isBest: boolean;
};

export const initialScoreState: ScoreShape = {
  current: 0,
  best: 0,
  total: 0,
  last: null,
  isBest: false,
};

export const score = atom<ScoreShape>({
  key: "score",
  default: initialScoreState,
});
export const useScoreState = () => useRecoilState(score);
export const useScoreValue = () => useRecoilValue(score);
export const useScoreSetter = () => useSetRecoilState(score);
