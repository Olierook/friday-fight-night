
import { useStore } from "./../context/Store";

export default function useResponsiveValue(big, medium, small) {
  const [{isBig, isSmall}] = useStore();
  return isBig ? big : isSmall ? small : medium;
}


