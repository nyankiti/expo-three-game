import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const game = atom<number>({
  key: "game",
  default: 0,
});
export const useGameState = () => useRecoilState(game);
export const useGameValue = () => useRecoilValue(game);
export const useGameSetter = () => useSetRecoilState(game);
