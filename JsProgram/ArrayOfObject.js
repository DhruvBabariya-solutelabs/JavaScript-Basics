import "core-js";
const data=[
    {
        id: 1,
        name: "jigar",
        collegeName: "abc",
        age: 17,
        marks:[95,24,35]
    },
    {
        id: 2,
        name: "dev",
        collegeName: "xyx",
        age: 17,
        marks:[95,24,35]
    },
    {
        id: 3,
        name: "jigar",
        collegeName: "abc",
        age: 17,
        marks:[95,24,35]
    },
    {
        id: 4,
        name: "mno",
        collegeName: "npq",
        age: 17,
        marks:[89,34,35]
    },
    {
        id: 5,
        name: "nno",
        collegeName: "iit",
        age: 17,
        marks:[67,24,35]
    },
    {
        id: 6,
        name: "def",
        collegeName: "SAL",
        age: 17,
        marks:[67,24,35]
    },
    {
        id: 7,
        name: "KAZI",
        collegeName: "GIT",
        age: 17,
        marks:[30,50,50]
    }
];

 const result2 = data.group(({collegeName})=>collegeName);
console.log(result2);