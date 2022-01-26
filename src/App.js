import { Route, Routes } from "react-router-dom";

import Meetups from "./pages/Meetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Meetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
