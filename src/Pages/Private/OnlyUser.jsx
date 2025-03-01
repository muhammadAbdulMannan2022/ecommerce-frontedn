import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Loading from "../../utils/Loading";

const OnlyUser = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user && !loading) {
    // Redirect to login and remember where the user came from
    // console.log(location);
    return (
      <Navigate to="/login" state={{ from: location?.pathname }} replace />
    );
  }

  return children;
};

export default OnlyUser;
