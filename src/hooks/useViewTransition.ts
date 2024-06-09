import { useNavigate } from "react-router-dom";

export const useTransitionRouterPush = () => {
  const navigation = useNavigate();
  const startViewTransition = (to: string) =>
    document.startViewTransition(async () => {
      navigation(to);
    });

  return { startViewTransition };
};
