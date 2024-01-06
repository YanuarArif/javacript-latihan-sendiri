const person = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    },
    hobbies: ['reading', 'coding', 'traveling']
  };
  
  // Create a deep copy of the person object with a modified name and an added hobby
  const modifiedPerson = {
    ...person,
    name: 'Jane',
    hobbies: [...person.hobbies, 'painting'],
    address: {
      ...person.address,
      city: 'San Francisco'
    }
  };
  
  console.log(person);          // Original person object remains unchanged
  console.log(modifiedPerson);  // Modified person object
  