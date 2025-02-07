import {Friend, Colleague, ColleagueHistory } from './myTypes'

const friend1: Friend = {
    name: "Bob Ross",
    phone: "087-12345",
    age: 25,
    dob: new Date("1998-11-20") ,
  };
  
  const friend2: Friend = {
    name: "Ross Bob",
    phone: "086--12345",
    age: 31,
    interests: ['Music', 'Sport']
  };
  
  export const friends: Friend[] = [friend1, friend2];
  //console.log(friends[1]);
  
  //   -------------------
  const colleague1: Colleague = {
    name: "Robby Boss",
    department: "Engineering",
    contact: {
      email: "rboss@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Bossy Rob",
    department: "Finance",
    contact: {
      email: "brob@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Brossy Brob",
    department: "HR",
    contact: {
      email: "bbrob@company.com",
      extension: 125,
    },
  };
  export const colleagues : ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };  
  
  //console.log(colleagues.current[0]);