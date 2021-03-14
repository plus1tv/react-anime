/**
 * Pick the value from an array.
 */
export type PickValue<T> = T extends ReadonlyArray<any>
  ? {
      [K in Extract<keyof T, number>]: PickValue<T[K]>;
    }[number]
  : T;

/**
 * Flatten an `ArrayLike` object in TypeScript.
 */
export type FlatArray<T extends ArrayLike<any>> = Array<PickValue<T[number]>>;

/**
 * Flatten an array indefinitely.
 */
export function flatten<T extends ArrayLike<any>>(array: T): FlatArray<T> {
  const result: FlatArray<T> = [];
  $flatten<T>(array, result);
  return result;
}

/**
 * Internal flatten function recursively passes `result`.
 */
function $flatten<T extends ArrayLike<any>>(
  array: T,
  result: FlatArray<T>
): void {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (Array.isArray(value)) {
      $flatten(value as any, result);
    } else {
      result.push(value);
    }
  }
}
