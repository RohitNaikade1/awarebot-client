import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Footer from './components/header & footers/footer';
import Header from './components/header & footers/header';
import Home from './components/home';
import Admin from './components/admin';
import Notice from './components/noticeboard';
import Login from './components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/notice" component={Notice}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
