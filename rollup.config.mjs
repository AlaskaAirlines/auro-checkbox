import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const production = !process.env.ROLLUP_WATCH,

 modernConfig = {
  input: {
    ['auro-checkbox__bundled']: './index.js',
    ['auro-icon__check-lg']: './node_modules/@alaskaairux/icons/dist/icons/interface/check-lg.mjs',
  },
  output: {
    format: 'esm',
    dir: 'dist/'
  },
  plugins: [
    nodeResolve(),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ]
};

export default [modernConfig];
