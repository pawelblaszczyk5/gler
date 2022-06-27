import withSolid from 'rollup-preset-solid';
import replace from '@rollup/plugin-replace';

export const rollupConfig = withSolid({
  input: 'src/index.tsx',
  targets: ['esm', 'cjs'],
  plugins: [
    replace({
      'import.meta.vitest': 'undefined',
    }),
  ],
});
