import fs from "fs/promises"
export function createUserService(username, password, email) {
    const result = { username, password, email }
    if (!username || !password || !email) {
        throw new Error("You must fill in your username, password, and email")
    }
    return result
}


export function authenticateJWT(username, password) {
    const {username, password} = fs.readFile('myfile.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }
        console.log('File content:', data)
    })
    return {username, password}
}