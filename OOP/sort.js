const list = [
    {
        
        name: "Dumbo",
        age: 1000
    },
    {
        name: "Pinnochio",
        age: 1
    },
    {
        name: "Cinderella",
        age: 15
    }
]

console.log(list)

list.sort(compareFor)

console.log(list)

function compareFor(a,b) {

    return a.age - b.age
}

