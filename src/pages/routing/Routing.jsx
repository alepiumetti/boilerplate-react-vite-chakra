import { useSelector } from "react-redux";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Layout from "../layout/Layout";
import Inicio from "../inicio/Inicio";

const Routing = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      {!user && (
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="" element={<Navigate to="/login" replace={true} />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Route>
      )}
      {user && (
        <Route path="/" element={<Layout user={user} />}>
          <Route path="" element={<Inicio />} />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      )}
    </Routes>
  );
};

export default Routing;
