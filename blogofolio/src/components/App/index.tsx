import './App.scss';
import { Confirmation } from '../Confirmation';
import { PostList } from '../PostList';
import { SelectedPost } from '../SelectedPost';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
import { Success } from '../Success';
import { Search } from '../Search';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import NotFound from '../NotFound/NotFound';

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
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
