import path from 'path';

console.log({
  currentdir: './',
  dirname: path.resolve(__dirname, 'src'),
  dirname2: path.resolve('src'),
  dirname3: path.resolve(__dirname),
});

export const alias = [
  { find: '@', replacement: path.resolve(__dirname) },
];
