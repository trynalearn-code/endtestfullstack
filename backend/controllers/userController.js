import { authenticateJWT, createUserService } from "../services/userService.js"
import jwt from "jsonwebtoken"


export async function createUserController(req, res){
    try {
        const result = await createUserService(req.body)
        return res.status(200).json({
            success:true,
            data:result
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            success:false,
            error: "There was an error creating your user"
        })
    }
}

export async function authenticateJWTController(req, res){
    const { username, password } = req.body;
    const JWT_SECRET = 'jwtSecretKey';
    const payload = {
    username: user.id,
    password: user.username,
  };
    const users = await authenticateJWT({username, password})
    const user = users.find(u => u.username === username && u.password === password)
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
}


