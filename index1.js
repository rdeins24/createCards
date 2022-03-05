let data = [
    {
        name:'john',
        age:30,
    },
    {
        name:'bill',
        age:30,
    },
    {
        name:'alex',
        age:30,
    },
    {
        name:'bob',
        age:30,
    },
    {
        name:'john',
        age:30,
    },
    {
        name:'john',
        age:30,
    },
    {
        name:'nill',
        age:30,
    },
    {
        name:'bill',
        age:30,
    },
    {
        name:'bill',
        age:30,
    },

]


const info=document.querySelector('#info')

let details=data.map((item)=>{
    return  '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
    
})

info.innerHTML=details.join('\n')