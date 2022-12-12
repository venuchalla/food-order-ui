import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function AuthenticationApp() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element ={<HomePage></HomePage>}>
        </Route>
        <Route path='/auth' element ={<AuthPage></AuthPage>}>
        </Route>
        <Route path='/profile' element = {<UserProfile></UserProfile>}>xz
        </Route>
        </Routes>
    </Layout>
  );
}

export default AuthenticationApp;
