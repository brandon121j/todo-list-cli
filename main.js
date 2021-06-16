const prompt = require('prompt-sync')({ sigint: true });
let toDo = [];
let toDoItems = 0;
let complete = [];
let status = (complete) => {
    const something = complete ? "Incomplete" : "Complete";
    return something;
}

while(prompt !== 'done') {

    const input = console.log(
        ' \n' +
        '[1] Create a to-do item \n' +
        '[2] Complete a to-do item' + 
        ' \n' 
    )

    let create = prompt('');

    if (create === 1 || create === '1') {
        console.log(' ');
        console.log('Input to-do item name');
        console.log(' ');
        let name = prompt('');
        toDo.push(name);
        toDoItems += 1;
        complete.push(false);
        console.log(' ');
        console.log('1 to-do item added');
        console.log(' ');
    }

    if (create === 2 || create === '2') {

        console.log(' ');
        for(i = 0; i < toDo.length; i++) {
            console.log(`[${[i]}] ${status(complete)} ${toDo[i]}`);
        }
        console.log(' ');

        console.log('Enter the to-do item id of the task you would like to complete');
        console.log(' ');
        let check = prompt('');

        if (check > complete.length) {
            console.log('Enter a valid to-do item ID')
            console.log(' ');
        }

        else {
            complete[{create}] = true;
            console.log(complete[{create}]);
            console.log(' ');
        }

    }

    console.log('===============================================================');
    console.log(' ');
    console.log(`You have ${toDoItems} to-do item(s):`);
    for(i = 0; i < toDo.length; i++) {
        console.log(`   ${[i]}. ${status(complete)} ${toDo[i]}`)
    }
    console.log(' ');
    console.log('===============================================================');

}


// while (toDoItems === 0) {
//     console.log('Your to-do list is empty');
//     console.log(' ')
//     console.log('~ Select an action ~');
//     console.log(' ')
//     let create = prompt('[1] Create a to-do item ');

//     if (create == '1' || create == 1) {
//         console.log('===============================================================');
//         console.log(' ')
//         console.log(' ')
//         console.log(' ')
//         console.log('~ Creating a new to-do item ~');
//         console.log(' ')
//         let called = prompt('What is this to-do item called? ');
//         toDo.push(called);
//         toDoItems += 1;
//         complete += false;
//         console.log(' ')
//         console.log('1 to-do item added');
//         console.log(' ')
//         console.log(' ')
//         console.log(' ')
//         console.log('===============================================================');
//         console.log(' ')
//         console.log(' ')
//         console.log(' ')
//     }

//     else {

//     }
// }

// while (toDoItems >= 1) {
//     console.log(`You have ${toDoItems} to-do item(s)`);
//     for(i = 0; i < toDo.length; i++) {
//         console.log(`[${[i]}] ${toDo[i]}`)
//     }
//     console.log(' ')
//     console.log(' ')
//     console.log(' ')
//     console.log('===============================================================');
    

//     if (create === 1 || create === '1') {
//         console.log('===============================================================');
//         console.log(' ')
//         console.log(' ')
//         console.log(' ')
//         console.log('~ Creating a new to-do item ~');
//         let called = prompt('What is this to-do item called? ');
//         toDo.push(called);
//         toDoItems += 1;
//         complete += false;
//         console.log('1 to-do iteam added');
//     }
// }
