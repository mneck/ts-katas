# ts_katas

Interview-style TypeScript practice focused on:

- parsing JSON strings
- transforming arrays with `map`
- narrowing lists with `filter`
- aggregating data with `reduce`

The katas start small and get progressively more realistic. Each one expects a JSON string input because that pattern comes up often in take-homes, API work, and interview exercises.

## Getting started

```sh
npm install
npm test
```

Open `src/katas.ts` and implement the functions one by one. The tests are ordered by difficulty:

1. `01_names_uppercase`
2. `02_filter_adults`
3. `03_total_price`
4. `04_discounted_titles`
5. `05_average_score`
6. `06_count_by_department`
7. `07_unique_tags`
8. `08_top_spender`
9. `09_active_pet_names`
10. `10_revenue_by_category`
11. `11_valid_transaction_ids`
12. `12_session_report`

## Suggested workflow

Run the full suite:

```sh
npm test
```

If you want to focus on a single kata:

```sh
npx vitest run src/01_names_uppercase.test.ts
```

## What to practice

- define small helper types
- parse unknown JSON safely
- use `Array.isArray`
- use type guards when the parsed value is `unknown`
- choose between `map`, `filter`, and `reduce`
- combine them without losing readability

## Notes

- The starter implementations currently throw errors on purpose.
- Most exercises can be solved with a straightforward parse plus `map`, `filter`, and `reduce`.
- A few later katas are intentionally more interview-like and may need helper functions or intermediate variables.

## Quick review: objects

An object stores data as `key: value` pairs.

```ts
const person = {
  name: "Ada",
  age: 36,
  active: true,
};
```

You can read values with dot notation:

```ts
person.name; // "Ada"
person.age; // 36
```

Arrays can contain objects:

```ts
const people = [
  { name: "Ada", age: 36 },
  { name: "Grace", age: 40 },
];
```

That matters for these katas because many exercises use JSON strings that represent arrays of objects.

## Quick review: JSON

JSON is just text that represents data.

Example JSON string:

```ts
'[{"name":"Ada","age":36},{"name":"Grace","age":40}]'
```

This is different from a real JavaScript array. It is a string until you parse it.

### `JSON.stringify`

Turns JavaScript data into a JSON string:

```ts
const people = [
  { name: "Ada", age: 36 },
  { name: "Grace", age: 40 },
];

const json = JSON.stringify(people);
```

Now `json` is a string.

### `JSON.parse`

Turns a JSON string back into JavaScript data:

```ts
const parsed = JSON.parse(json) as Array<{ name: string; age: number }>;
```

Now `parsed` is a real array, so you can use array methods like `map`, `filter`, and `reduce`.

### Common mistake

This will not work:

```ts
const json = JSON.stringify(["ada", "grace"]);
json.map((name) => name.toUpperCase());
```

It fails because `json` is a string, not an array.

This is the right pattern:

```ts
const json = JSON.stringify(["ada", "grace"]);
const names = JSON.parse(json) as string[];

const uppercased = names.map((name) => name.toUpperCase());
```

## Quick review: `map`

Use `map` when you want:

- the same number of items out
- each item transformed into something else

Example:

```ts
const names = ["ada", "grace", "linus"];
const uppercased = names.map((name) => name.toUpperCase());
```

Result:

```ts
["ADA", "GRACE", "LINUS"]
```

Think of `map` as:

`take each item and transform it`

### Object example

```ts
const people = [
  { name: "Ada", age: 36 },
  { name: "Grace", age: 40 },
];

const names = people.map((person) => person.name);
```

Result:

```ts
["Ada", "Grace"]
```

## Quick review: `filter`

Use `filter` when you want:

- to keep some items
- and remove others

Example:

```ts
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
```

Result:

```ts
[2, 4]
```

Think of `filter` as:

`keep only the items that match a rule`

### Object example

```ts
const people = [
  { name: "Nina", age: 17 },
  { name: "Omar", age: 18 },
  { name: "Priya", age: 26 },
];

const adults = people.filter((person) => person.age >= 18);
```

Result:

```ts
[
  { name: "Omar", age: 18 },
  { name: "Priya", age: 26 },
]
```

## Quick review: `reduce`

Use `reduce` when you want to combine many items into one result.

That result might be:

- a number
- an object
- an array

### Number example

```ts
const prices = [10, 20, 30];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);
```

Result:

```ts
60
```

### Object example

```ts
const words = ["cat", "dog", "cat"];

const counts = words.reduce<Record<string, number>>((acc, word) => {
  acc[word] = (acc[word] ?? 0) + 1;
  return acc;
}, {});
```

Result:

```ts
{
  cat: 2,
  dog: 1,
}
```

Think of `reduce` as:

`start with one accumulator value, then update it for each item`

## When to use which one

- Use `map` when you want to transform every item
- Use `filter` when you want to keep only matching items
- Use `reduce` when you want to combine everything into one result

## Very common interview patterns

### Parse, then transform

```ts
const data = JSON.parse(json) as string[];
return data.map((item) => item.toUpperCase());
```

### Parse, then filter

```ts
const data = JSON.parse(json) as Array<{ name: string; age: number }>;
return data.filter((person) => person.age >= 18);
```

### Parse, then reduce

```ts
const data = JSON.parse(json) as Array<{ price: number }>;
return data.reduce((sum, item) => sum + item.price, 0);
```

### Filter, then map

```ts
const data = JSON.parse(json) as Array<{ title: string; onSale: boolean }>;

return data
  .filter((item) => item.onSale)
  .map((item) => item.title);
```

## A good mental template for these katas

When you get stuck, try this shape first:

```ts
export function example(json: string) {
  const data = JSON.parse(json);

  return data
    .filter(...)
    .map(...);
}
```

Or:

```ts
export function example(json: string) {
  const data = JSON.parse(json);

  return data.reduce(...);
}
```

## Reminder: tests vs implementation

In this project:

- test files describe the expected behavior
- `src/katas.ts` is where you write the actual solution

So if a test says:

```ts
expect(namesUppercase(json)).toEqual(["ADA", "GRACE"]);
```

your job is to make `namesUppercase(...)` return that value from `src/katas.ts`.
