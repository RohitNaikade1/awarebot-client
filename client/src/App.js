import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Footer from './components/header & footers/footer';
import Header from './components/header & footers/header';
import Home from './components/home/home';
import Admin from './components/admin center/admin';
import adPosts from './components/admin center/pages/adPosts';
import adCreds from './components/admin center/pages/adCredentials';
import adStudents from './components/admin center/pages/adStudents';
import adPublish from './components/admin center/pages/adPublish';
import adStaff from './components/admin center/pages/adStaff';
import Notice from './components/noticeboard/noticeboard';
import adHome from './components/admin center/pages/adHome';
import About from './components/about visionware/about';
import Login from './components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ReactNotification from 'react-notifications-component';
import history from './components/helpers/history';

function App() {
  return (
    <>
      <BrowserRouter history={history}>
      <ReactNotification />
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/publish" exact component={adPublish}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/notice" component={Notice}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/adPosts" component={adPosts}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/adSchemes" component={Notice}></Route>
          <Route path="/adStaff" component={adStaff}></Route>
          <Route path="/adHome" component={adHome}></Route>
          <Route path="/adCreds" component={adCreds}></Route>
          <Route path="/adStudents" component={adStudents}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
