import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import Sidebar from './components/Sidebar';
import ButtonPage from './components/Button';
import ModalPage from './components/Modal';
import Button from './components/Button';

function App () {
  return ( 
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  )
}

export default App;