import { namespaced } from 'overmind/config';
import * as stokcs from './stocks';

const config = namespaced({
  stokcs,
});
export default config;
