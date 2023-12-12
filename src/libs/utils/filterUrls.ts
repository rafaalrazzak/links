interface Item {
  [key: string]: any;
  // You can add other properties here as needed
}

export function filterItemsByType<T extends Item>(
  items: T[],
  filter: { key: string; value: any },
): T[] {
  return items.filter((item) => item[filter.key] === filter.value);
}
