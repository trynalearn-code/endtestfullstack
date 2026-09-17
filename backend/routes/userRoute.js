import express from "express"
import { authenticateJWTController, createUserController } from "../controllers/userController.js"
import express from "express"
import bodyParser from "body-parser"
import { authenticateJWTMiddleware } from "../middleware/authenticationMiddleware.js"



const router = express.Router()

router.use(express.json())
router.use(bodyParser.json());


router.post("/user", createUserController)
app.post('/login', authenticateJWTController)

router.get('/admin', authenticateJWTMiddleware, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: admin role required' });
  }
  res.json({ message: 'Admin panel accessed' });
});

export default router

