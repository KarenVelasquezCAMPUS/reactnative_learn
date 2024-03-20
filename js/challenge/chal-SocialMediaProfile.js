// Social Media Profile

// 1. User Information

const username = "codingAdventurer";
const fullName = "Jhon Doe";
const age = 22;
const isStudent = true;

// 2. Address

const address = {
    street: "123 Main Street",
    city: "Codeville",
    state: "Codingland",
    zipCode: "10001"
}

// 3. Hobbies

const hobbies = [
    "Gaming",
    "Cooking",
    "Coding"
]

// 4. Generating Personalized Bio

const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
i live in ${address.city}.
I'm a ${isStudent? "student" : "student"}.
I love ${hobbies.join(",")}.
Follow me for more information and coding adventures!`;

// 5. Print the user profile and bio
console.log(personalizedBio);