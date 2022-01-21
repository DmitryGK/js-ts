import React, {MouseEvent} from 'react'



const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {

        alert(e.currentTarget.name)
    }

    const saveUser = () => {
        alert('user saved')
    }

    const onNameChanged = () => {
        console.log("name changed")
    }

    const focusLostHandler = () => {
        console.log("name changed")
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}> Dmitry</textarea>
            <button name='delete' onClick={deleteUser}>x</button>
            <button name='save' onClick={deleteUser}>x</button>
        </div>
    )
}

export default User