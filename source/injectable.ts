import { Constructable } from './types';

export function Injectable(): (target: Constructable<any>) => void {
  return (target: Constructable<any>) => {};
}
