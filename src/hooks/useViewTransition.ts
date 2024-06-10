import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const useTransitionRouterPush = () => {
  const navigate = useNavigate();
  const startViewTransition = (to: string) =>
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      });
    });

  return { startViewTransition };
};
