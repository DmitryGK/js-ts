import {UsersType} from "./08";

const users: UsersType = {
    '1212': {id: 1212, name: 'Dmitry'},
    '23': {id: 23, name: 'Svetlana'},
    '5648': {id: 5648, name: 'Pol'},
    '3222': {id: 3222, name: 'Garry'}
}

test('user name should be corrected', () => {

    users['23'].name = 'Ulita'

    expect( users['23'].name).toBe('Ulita')
    expect( users['1212']).toEqual( {id: 1212, name: 'Dmitry'})

})

