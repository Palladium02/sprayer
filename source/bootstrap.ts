import { Injector } from './injector';
import { Constructable } from './types';

export function bootstrap<T>(target: Constructable<T>): [T, () => void] {
  const injector = new Injector();
  const entry = injector.resolve<T>(target);
  return [entry, () => injector.release()];
}
