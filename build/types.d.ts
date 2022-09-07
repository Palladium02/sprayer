export interface Constructable<T> {
    new (...args: any[]): T;
}
export interface Releasable {
    release(): void;
}
