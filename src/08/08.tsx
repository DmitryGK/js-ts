let user = {
    name: 'Dmitry',
    age: '32',
    country: {
        city: {
            title: 'Minsk'
        }
    }
}


console.log(user.country.city.title)
console.log(user['country']['city']['title'])

export type UsersType = {
    [key: string]: {id: number, name:string}
}

const users: UsersType = {
    '1212': {id: 1212, name: 'Dmitry'},
    '23': {id: 23, name: 'Svetlana'},
    '5648': {id: 5648, name: 'Pol'},
    '3222': {id: 3222, name: 'Garry'}
}

//users[23]


let user1 = { id: 123345, name: 'Kolya'}
users[user1.id] = user1


const users2 = [
    {id: 1212, name: 'Dmitry'},
    {id: 23, name: 'Svetlana'},
    {id: 5648, name: 'Pol'},
    {id: 3222, name: 'Garry'}

]

users2.find(i => i.id === 23)