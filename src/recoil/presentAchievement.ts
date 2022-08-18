import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export type PresentAchievementShape = null | {
  id: string;
  name: string;
};

export const presentAchievements = atom<PresentAchievementShape>({
  key: "presentAchievements",
  default: null,
});

export const usePresentAchievementsState = () =>
  useRecoilState(presentAchievements);
export const usePresentAchievementsValue = () =>
  useRecoilValue(presentAchievements);
export const usePresentAchievementsSetter = () =>
  useSetRecoilState(presentAchievements);
