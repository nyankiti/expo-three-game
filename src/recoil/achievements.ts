import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export type AchievementsShape = Record<string, true>;

export const achievements = atom<AchievementsShape>({
  key: "achievements",
  default: {},
});
export const useAchievementsState = () => useRecoilState(achievements);
export const useAchievementsValue = () => useRecoilValue(achievements);
export const useAchievementsSetter = () => useSetRecoilState(achievements);
