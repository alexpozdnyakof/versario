
/**
* Base Unit for application interaction
**/
export interface Unit<T,R> {
  extra: (extras: any) => void;

  callback: (result: R) => R;
}
