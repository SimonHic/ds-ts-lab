import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Bob')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

// My genric Code goes here
function sort<T>(data: T[], compareFn: (a: T, b: T) => number): T[]{
    return [...data].sort(compareFn);
}

// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);
