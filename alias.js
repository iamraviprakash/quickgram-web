import path from 'path';

console.log({
  currentdir: './',
  dirname: path.resolve(__dirname, 'src'),
});

export const alias = [
  { find: '@', replacement: path.resolve(__dirname, 'src') },
];
