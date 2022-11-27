import path from 'path';

export const alias = [
  { find: '@', replacement: path.resolve(__dirname, './src') },
];
