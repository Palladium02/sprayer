import { Constructable } from './types';
export declare function bootstrap<T>(target: Constructable<T>): [T, () => void];
