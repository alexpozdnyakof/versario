export interface Unit<T,R> {
  payload: (payload: T) => T;
  callback: (result: R) => R
}
