import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export type StoreReviewShape = {
  promptTime: number;
};

export const storeReview = atom<StoreReviewShape>({
  key: "storeReview",
  default: { promptTime: Date.now() },
});
export const useStoreReviewState = () => useRecoilState(storeReview);
export const useStoreReviewValue = () => useRecoilValue(storeReview);
export const useStoreReviewSetter = () => useSetRecoilState(storeReview);
