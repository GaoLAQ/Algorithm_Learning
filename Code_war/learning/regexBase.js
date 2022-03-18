let test = 'Hass'

function validateUsr(username){
    let regex = /[a-z_1-9]{4-16}/g
    return regex.test(username)
}

console.log(validateUsr(test))