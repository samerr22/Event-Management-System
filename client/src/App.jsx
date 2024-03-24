import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OnlyEventPrivateRoute from "./components/OnlyEventMangerPrivateRoute";
import CreatePost from "./pages/CreatePost";
import Event from "./pages/Event";
import Update from "./pages/UpdateEvent";
import Details from "./pages/DetailsEvent";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/event" element={<Event />} />
        <Route path="/details/:EventtId" element={<Details />} />

        <Route element={<OnlyEventPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-Event/:EventId" element={<Update />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
