## Notes

- Avoid collisions by using prime number in the length of the table

## Handling collisions

1. separate chaining

- store pieces of data at the same spot using another nested data structure, which allows storing multiple key value pairs at the same position

1. linear probing

- Store one piece of data at each position and if there is a spot that is already taken, with search through the array to find the next empty slot
- allows us to store a single key-value at each index
