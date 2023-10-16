import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Users } from "./pages/users";
import { User } from "./pages/user";

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<User />}></Route>
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </Router>
  );
};
