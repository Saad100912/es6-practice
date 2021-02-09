// Destructure in an object
// const person = {name: 'Abdur Rahman', age: 20, job: 'Student', college: 'Rajshahi College', address: 'Raipara', phone: '01831531971', friends: ['Tom Hanks', 'Leonardo DiCaprio', 'Robert Downey Junior']}

// const collegeName = person.college;
// const phoneNumber = person.phone;

// // console.log(collegeName, phoneNumber);
// // console.log(phoneNumber);
// console.log(collegeName);

// const { phone, college, address } = person;
// console.log(phone, college, address);


// Destructure in an array
// const friends = ['Tom Hanks', 'Leonardo DiCaprio', 'Robert Downey Junior'];
// const [firstFriend, nextFriend, ...restFriend] = friends;
// console.log(firstFriend, nextFriend, ...restFriend);


// Complex Object
const person = {name: 'Abdur Rahman', age: 20, job: 'Student', college: 'Rajshahi College', address: 'Raipara', phone: '01831531971', friends: ['Tom Hanks', 'Leonardo DiCaprio', 'Robert Downey Junior']}

const {phone} = person;
const complexObject = {
    name: 'abc',
    info: {
        address: 'Somewhere',
        leader: 'Some Leader'
    }
}

const {leader} = complexObject.info;
console.log(leader);