import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import DishListProvider from './store/store';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <DishListProvider>
      <div className="main-class">
        <Header />
        <div className="content-wrapper">
          <Outlet />
        </div>
        {location.pathname !== "/Login" && location.pathname !== "/Cart" && <Contact />}
        {location.pathname !== "/Login" && location.pathname !== "/Cart" && <Footer />}

      </div>
    </DishListProvider>
  );
}

export default App
