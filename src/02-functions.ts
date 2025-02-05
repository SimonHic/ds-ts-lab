import {Friend, Colleague, EmailContact } from './myTypes'
import { friends } from './01-basics'
import { colleagues } from './01-basics'

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f1: Friend[]) {
    const result: string[] = [];
    f1.forEach(f => {
        f.age += 1;
        result.push(`${f.name} is now ${f.age}`);
    });
    return result; 
}

console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

// Add a colleague and set their extension number to the highest extension number from before  
function addColleague(cs:  Colleague[], name: string, department: string, email: string) {
    const highest = highestExtension(cs).contact.extension;
    cs.push({name, department, contact: {email, extension: highest +1}});
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

function findFriends(friendsList: Friend[], filterFunction: (friend: Friend) => boolean
  ): string[] {
    return friendsList.filter(filterFunction).map(friend => friend.name);
    }

console.log(findFriends(friends, (friend) => friend.name.startsWith('Bo')));
console.log(findFriends(friends, (friend) => friend.age < 35));  