
// interface Contact {
//     name: string;
//     phone: string;
//     email: string;
// }

// // TypeScript will now ensure that only objects matching the Contact interface can be added.
// // interface is a way to define the structure or "shape" of an object. 
// const contacts: Contact[] = [
//     {
//         name: "john",
//         phone: "123-456-7890",
//         email: "johnthean@example.com"
//     },
//     {
//         name: "bhaai",
//         phone: "234-567-8901",
//         email: "bhaai@example.com"
//     },
//     {
//         name: "suresh",
//         phone: "345-678-9012",
//         email: "sheresh@example.com"
//     }
// ];

// function displayContacts(contactList: Contact[]): void {
//     console.log("--- Your Contacts ---");
//     if (contactList.length === 0) {
//         console.log("Your contact list is empty.");
//         return;
//     }
//     contactList.forEach((contact, index) => {
//         console.log(`Contact #${index + 1}`);
//         console.log(`  Name: ${contact.name}`);
//         console.log(`  Phone: ${contact.phone}`);
//         console.log(`  Email: ${contact.email}`);
//         console.log("--------------------");
//     });
// }

// function addContact(name: string, phone: string, email: string): void {
//     const newContact: Contact = {
//         name: name,
//         phone: phone,
//         email: email
//     };
//     contacts.push(newContact);
//     console.log(`Successfully added ${name} to your contacts!`);
// }

// console.log("Displaying initial contacts:");
// displayContacts(contacts);

// console.log("\nAdding a new contact...");
// addContact("Diana", "456-789-0123", "diana@example.com");

// console.log("\nDisplaying updated contacts:");
// displayContacts(contacts);


// as ts cannot we directly run we have to convert it into js...

    // --- JavaScript Contact List using Objects and Arrays ---

        // 1. We start by creating an array to hold our contact objects.
        // Each contact is an object with key-value pairs for their information.
        const contacts = [
            {
                name: "john",
                phone: "123-456-7890",
                email: "johnthean@example.com"
            },
            {
                name: "bhaai",
                phone: "234-567-8901",
                email: "bhaai@example.com"
            },
            {
                name: "suresh",
                phone: "345-678-9012",
                email: "sheresh@example.com"
            }
        ];

        function displayContacts(contactList) {
            console.log("--- Your Contacts ---");
            if (contactList.length === 0) {
                console.log("Your contact list is empty.");
                return;
            }
            contactList.forEach((contact, index) => {
                console.log(`Contact #${index + 1}`);
                console.log(`  Name: ${contact.name}`);
                console.log(`  Phone: ${contact.phone}`);
                console.log(`  Email: ${contact.email}`);
                console.log("--------------------");
            });
        }

       
        function addContact(name, phone, email) {
            const newContact = {
                name: name,
                phone: phone,
                email: email
            };
            contacts.push(newContact);
            console.log(`Successfully added ${name} to your contacts!`);
        }

       
        console.log("Displaying initial contacts:");
        displayContacts(contacts);

        console.log("\nAdding a new contact...");
        addContact("Diana", "456-789-0123", "diana@example.com");
        
        console.log("\nDisplaying updated contacts:");
        displayContacts(contacts);
