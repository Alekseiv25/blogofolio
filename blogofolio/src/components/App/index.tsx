import './App.scss';
import { Confirmation } from '../../pages/Confirmation';
import { Main } from '../../pages/MainPage';
import { SelectedPost } from '../../pages/SelectedPost';
import { SignIn } from '../../pages/SignIn';
import { SignUp } from '../../pages/SignUp';
import { Success } from '../../pages/Success';
import { Search } from '../../pages/Search';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../pages/Layout';
import NotFound from '../../pages/NotFound';
import { Reset } from '../../pages/Reset';
import { AuthProvider } from '../hoc/AuthProvider';
import { CreatePost } from '../../pages/CreatePost';
import RequireAuth from '../hoc/RequireAuth';
import Activation from '../../pages/Activation';

function App(props: any) {
  const { post } = props

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='post/:id' element={<SelectedPost post={post} />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='confirmation' element={<Confirmation email={props.email} />} />
          <Route path='success' element={<Success />} />
          <Route path='search' element={<Search post={post} />} />
          <Route path='reset' element={<Reset />} />
          <Route path='*' element={<NotFound />} />
          <Route path='addPost' element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>} />
          <Route path='activate/:uid/:token' element={<Activation />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
