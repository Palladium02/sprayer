import 'reflect-metadata';
import { Constructable } from './types';
export declare class Injector extends Map {
    resolve<T>(target: Constructable<T>): T;
    release(): void;
}
