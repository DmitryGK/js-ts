import {UserType} from "./10_01";

function hairDresser (user: UserType, power: number) {
    // copy.hair = user.hair / power
    return {
        ...user,
        hair: user.hair / power
    }
}

test('user hair number change', () => {
    let user: UserType = {
        name: 'Dmitry',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const updateUser = hairDresser(user, 2)

    expect(updateUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})

test('change address', () => {
    let user: UserType = {
        name: 'Dmitry',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }
    const updateUser = move
    const updateUser = hairDresser(user, 2)

    expect(updateUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})