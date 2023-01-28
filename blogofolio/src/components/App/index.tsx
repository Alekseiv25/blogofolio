import './App.scss';
import { Confirmation } from '../Pages/Confirmation';
import { PostList } from '../Pages/PostList';
import { SelectedPost } from '../Pages/SelectedPost';
import { SignIn } from '../Pages/SignIn';
import { SignUp } from '../Pages/SignUp';
import { Success } from '../Pages/Success';
import { Search } from '../Pages/Search';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import NotFound from '../Pages/NotFound';
import { Reset } from '../Pages/Reset';

function App(props: any) {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path='post/:id' element={<SelectedPost />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='confirmation' element={<Confirmation email={props.email} />} />
        <Route path='success' element={<Success />} />
        <Route path='search' element={<Search />} />
        <Route path='reset' element={<Reset />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
