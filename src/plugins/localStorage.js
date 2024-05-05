export function setStatus(status){
    localStorage.setItem('isLoggedIn',status)
}

export function getStatus(){
    return localStorage.getItem('isLoggedIn') === 'true'
}