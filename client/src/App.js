import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Footer from './components/header & footers/footer';
import Header from './components/header & footers/header';
import Home from './components/home/home';
import Admin from './components/admin center/admin';
import adPosts from './components/admin center/pages/adPosts'
import Notice from './components/noticeboard/noticeboard';
import Login from './components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ReactNotification from 'react-notifications-component';

function App() {
  return (
    <>
      <BrowserRouter>
      <ReactNotification />
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/notice" component={Notice}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/adPosts" component={adPosts}></Route>
          {/* <Route path="/adSchemes" component={Notice}></Route>
          <Route path="/adStaff" component={Login}></Route>
          <Route path="/adHome" component={Notice}></Route>
          <Route path="/adCreds" component={Login}></Route> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
