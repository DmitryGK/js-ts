function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test('big reference type test', () => {
    let user: UserType = {
        name: 'Dmitry',
        age: 32
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test ('array test', () => {
    let users = [
        {
            name: 'Dmitry',
            age: 32
        },
        {
            name: 'Svetlana',
            age: 22
        }
    ]

    let admins = users
    admins.push ({name: 'Bandugan', age: 33})

    expect(users[2]).toBe({name: 'Bandugan', age: 33})


})