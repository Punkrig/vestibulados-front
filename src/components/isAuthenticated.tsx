import { useAuth } from '../contexts/AuthContext';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <div>Não Autorizado <p>{isAuthenticated}</p></div>;
};

export default PrivateRoute;
