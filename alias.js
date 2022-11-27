import path from 'path';

console.log({
  currentdir: './',
  dirname: path.resolve(__dirname, 'src'),
  dirname2: path.resolve('src'),
});

export const alias = [
  { find: '@', replacement: path.resolve('src') },
];
