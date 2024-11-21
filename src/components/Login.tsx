import React from 'react';
import { Music2 } from 'lucide-react';
import { loginUrl } from '../lib/spotify';

export const Login = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Music2 size={64} className="text-green-500" />
        </div>
        <h1 className="text-white text-4xl font-bold mb-8">Welcome to Spotify Clone</h1>
        <a
          href={loginUrl}
          className="bg-green-500 text-black font-semibold py-3 px-8 rounded-full hover:scale-105 transition inline-block"
        >
          Login with Spotify
        </a>
      </div>
    </div>
  );
};