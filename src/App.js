import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favourites from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div>
      {/* latest version doesnot need switch(telles to rendel only one route) and exact(tells exact path)  */}
      <Routes>
        <Route path="/" element={<AllMeetups />}/>
        <Route path="/new-meetup" element={<NewMeetups />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </div>
    </Layout>
  );
}

export default App;
