import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm, ProfileForm } from "./components";

import "./App.less";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/profile/:fullName" element={<ProfileForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
