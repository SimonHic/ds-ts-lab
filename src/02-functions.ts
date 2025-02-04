import {Friend, Colleague } from './myTypes'
import { friends } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f1: Friend[]) : string[] {
    const result: string[] = [];
    f1.forEach(f => {
        f.age += 1;
        result.push(`${f.name} is now ${f.age}`);
    });
    return result; 
}

console.log(allOlder(friends));