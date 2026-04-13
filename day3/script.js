const obj={
    id: 1,
    name: "guest",
    arr: [10,"hello",40.98,'hi']

}

console.log(obj.loc);

obj.loc="hyd";

console.log(obj);

console.log(obj.arr);

const user=[
    {
        id: 1,
        name: "user1",
        loc: "hyd"
    },
    {
        id: 2,
        name: "user2",
        loc:    "knr"
    },
]

console.log(user);
console.log(user[0]);
console.log(user[0].name);

//for of - arrays

for(const i of user)
{
    console.log(i)
}

//for in - objects
for (const key in user) {
    if (!Object.hasOwn(user, key)) continue;
    
    const element = user[key];
    console.log(element)
    
}
