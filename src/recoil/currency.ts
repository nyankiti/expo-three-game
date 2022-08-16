import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const currency = atom<{ current: number }>({
  key: "currency",
  default: {
    current: 0,
  },
});
export const useCurrencyState = () => useRecoilState(currency);
export const useCurrencyValue = () => useRecoilValue(currency);
export const useCurrencySetter = () => useSetRecoilState(currency);
