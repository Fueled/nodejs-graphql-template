export {};

declare global {
  /**
   * Allows extracting all possible values of another type.
   */
  type ValueOf<T> = T[keyof T];

  /**
   * Like Partial utility type, only this allows specifying select keys
   * to be made optional instead of all keys.
   */
  type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>

  /**
   * A slightly nicer way of defining nullable types.
   */
  type Nullable<T> = T | null;
}
