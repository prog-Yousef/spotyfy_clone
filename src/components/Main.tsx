import React from 'react';
import { Clock, Play } from 'lucide-react';

export const Main = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-auto">
      <div className="p-8">
        <div className="flex items-end space-x-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=240&h=240&fit=crop"
            alt="Playlist cover"
            className="w-60 h-60 shadow-2xl"
          />
          <div>
            <p className="text-sm font-semibold uppercase text-white">Playlist</p>
            <h1 className="text-8xl font-bold text-white mt-2 mb-6">Daily Mix 1</h1>
            <p className="text-white text-sm">
              Your personal playlist with <span className="text-green-500">Artist Name</span> and more
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center space-x-4 mb-6">
            <button className="w-14 h-14 flex items-center justify-center bg-green-500 rounded-full hover:scale-105 transition">
              <Play size={28} className="text-black ml-1" />
            </button>
          </div>

          <table className="w-full text-left text-gray-400">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 w-8">#</th>
                <th className="pb-3">Title</th>
                <th className="pb-3">Album</th>
                <th className="pb-3">Date added</th>
                <th className="pb-3"><Clock size={16} /></th>
              </tr>
            </thead>
            <tbody className="text-white">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-white/10 group">
                  <td className="py-4">{i}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=40&h=40&fit=crop`}
                        alt="Track"
                        className="w-10 h-10"
                      />
                      <div>
                        <p className="font-semibold">Track Name</p>
                        <p className="text-sm text-gray-400">Artist Name</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">Album Name</td>
                  <td className="py-4">2 days ago</td>
                  <td className="py-4">3:45</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};