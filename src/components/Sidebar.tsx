import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-black h-screen p-6">
      <div className="text-white space-y-6">
        <div className="space-y-4">
          <button className="flex items-center space-x-4 hover:text-green-500 transition-colors w-full">
            <Home size={24} />
            <span className="font-semibold">Home</span>
          </button>
          <button className="flex items-center space-x-4 hover:text-green-500 transition-colors w-full">
            <Search size={24} />
            <span className="font-semibold">Search</span>
          </button>
          <button className="flex items-center space-x-4 hover:text-green-500 transition-colors w-full">
            <Library size={24} />
            <span className="font-semibold">Your Library</span>
          </button>
        </div>

        <div className="pt-6 space-y-4">
          <button className="flex items-center space-x-4 hover:text-green-500 transition-colors w-full">
            <div className="bg-white/10 p-1 rounded-sm">
              <Plus size={20} className="text-white" />
            </div>
            <span className="font-semibold">Create Playlist</span>
          </button>
          <button className="flex items-center space-x-4 hover:text-green-500 transition-colors w-full">
            <div className="bg-gradient-to-br from-purple-500 to-blue-300 p-1 rounded-sm">
              <Heart size={20} className="text-white" />
            </div>
            <span className="font-semibold">Liked Songs</span>
          </button>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="text-sm text-gray-400 hover:text-white cursor-pointer">Your Playlist #1</div>
        </div>
      </div>
    </div>
  );
};