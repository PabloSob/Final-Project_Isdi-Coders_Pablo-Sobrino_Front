import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface RouteProtectorProps {
  children: JSX.Element | JSX.Element[];
}

const RouteProtector = ({ children }: RouteProtectorProps): JSX.Element => {
  const hasToken = useAppSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasToken) {
      navigate("/login");
    }
  }, [hasToken, navigate]);

  return <>{hasToken && children}</>;
};

export default RouteProtector;
