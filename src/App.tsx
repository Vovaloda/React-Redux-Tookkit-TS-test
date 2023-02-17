import React, { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreator';
import { userSlice } from './store/reducers/UseSlice';

function App() {
  const dispatch = useAppDispatch();
  const {error, isLoading, users} = useAppSelector (state => state.userReducer);

  useEffect(()=>{
    dispatch(fetchUsers());
  }, []);

/*
      {isLoading && <h1>Идёт загрузка</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
*/

  return (
    <div className="App">
      <PostContainer />
    </div>
  );
}

export default App;
