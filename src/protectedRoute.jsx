import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

// const ProtectedRoute = ({ children, ...rest }) => {
//   const { currentUser } = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         currentUser ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// };

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  console.log("protec" + currentUser);
  return currentUser !== null ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
