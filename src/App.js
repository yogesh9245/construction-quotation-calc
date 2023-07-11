import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import SignUp from './screens/SignUp';
import Quotation from './screens/Quotation';
import Appointment from './screens/Appointment';
import { CartProvider } from './components/ContextReducer';
import BookApp from './screens/BookApp';
import MyBooking from './screens/MyBooking';

function App() {
  return (
    <CartProvider>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createuser' element={<SignUp />} />
          <Route exact path='/Quotation calculator' element={<Quotation />} />
          <Route exact path='/Appointment with the Contractor' element={<Appointment />} />
          <Route exact path='/bookapp' element={<BookApp />} />
          <Route exact path='/mybookings' element={<MyBooking />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
