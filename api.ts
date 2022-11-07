/**
* Base Unit for application interaction
**/
export interface Unit<T,R> {
  extra: (extras: any) => void
  payload: (payload: T) => T;
  callback: (result: R) => R;
  dataEnhance: (data: T) => Enhanced<T>;
}
