import React, { useEffect } from 'react';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Player } from './components/Player';
import { useStore } from './store/useStore';
import { getTokenFromUrl, api } from './lib/spotify';

function App() {
  const { token, setToken, setUser } = useStore();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      api.getCurrentUser(_token).then(setUser);
      window.location.hash = '';
    }
  }, [setToken, setUser]);

  if (!token) return <Login />;

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Main />
      </div>
      <Player />
    </div>
  );
}

export default App;