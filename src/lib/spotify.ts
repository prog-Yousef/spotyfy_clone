const CLIENT_ID = 'd7613dad7c71493e98fbc27627ebe8df';
const REDIRECT_URI = window.location.origin;
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-top-read',
  'playlist-read-private',
  'playlist-read-collaborative',
];

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join('%20')}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: { [key: string]: string }, item) => {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const api = {
  getCurrentUser: async (token: string) => {
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },

  getTopTracks: async (token: string) => {
    const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },

  getRecentlyPlayed: async (token: string) => {
    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },
};