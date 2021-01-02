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
import AdHome from './components/admin center/pages/adHome';
import About from './components/about visionware/about';
import Loginpage from './components/login';
import { Router, Route, Switch } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import history from './components/helpers/history';
import AdminRouter from './components/onlyAdmin';
import AdminInstructorRouter from './components/adminInstructorRouter';
function App() {
  return (
    <div className="app">
      <Router history={history}>
      <ReactNotification />
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <AdminRouter path="/publish" exact component={adPublish}></AdminRouter>
          <AdminRouter path="/admin" component={Admin}></AdminRouter>
          <AdminInstructorRouter path="/notice" component={Notice}></AdminInstructorRouter>
          <Route path="/login" component={Loginpage}></Route>
          <AdminInstructorRouter path="/adPosts" component={adPosts}></AdminInstructorRouter>
          <Route path="/about" component={About}></Route>
          <AdminRouter path="/adSchemes" component={Notice}></AdminRouter>
          <AdminRouter path="/adStaff" component={adStaff}></AdminRouter>
          <AdminInstructorRouter path="/adHome" component={AdHome}></AdminInstructorRouter>
          <AdminRouter path="/adCreds" component={adCreds}></AdminRouter>
          <AdminRouter path="/adStudents" component={adStudents}></AdminRouter>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
