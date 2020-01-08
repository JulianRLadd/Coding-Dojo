// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// function print(arr){
//     for(item in arr){
//         console.log("Name: "+arr[item].name+", Cohort: "+arr[item].cohort)
//     }
// }

// print(students)

let users = {
    'employees': [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    'managers': [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};


// console.log(users.employees[1].first_name)

function charlength(users){

    for(user in users){
        console.log(user.toUpperCase())
        for(workers = 0;workers<users[user].length;workers++){
            charlen = users[user][workers].first_name.length + users[user][workers].last_name.length
            console.log((workers+1)+" - "+users[user][workers].last_name.toUpperCase()+", "+users[user][workers].first_name.toUpperCase()+" - "+charlen)

        }
    }
}

charlength(users)