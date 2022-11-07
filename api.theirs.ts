export interface Unit<T,R> {
    extra: (extras: any) => void
    dataEnhance: (data: T) => Enhanced<T>;
    callback: (result: R) => R
}
