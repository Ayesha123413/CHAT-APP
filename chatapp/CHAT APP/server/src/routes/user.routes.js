import express from 'express'
const router = express.Router()
import User from '../models/user.model.js'
import { hashPassword, comparePassword } from '../utilities/password.js'
import { generateAccessToken } from '../utilities/authentication.js'

//Registration
router.post('/registration', async (req, res) => {
  try {
    // console.log('runnign')
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      res.send({ message: 'fill all fields!' })
    }
    console.log(req.body)
    const _password = await hashPassword(req.body.password)
    const createUser = await User.create({
      ...req.body,
      password: _password,
    })
    res.send({
      status: true,
      message: 'user created',
      data: createUser,
    })
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    })
  }
})

//login
router.get('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.send({ error: 'please fill the data' })
    }
    console.log('running')
    // 1st (email) is attribute name in collection of db
    const _userExist = await User.findOne({ email: email })
    if (_userExist) {
      const passwordMatch = await comparePassword(password, _userExist.password)
      if (passwordMatch) {
        let token = await generateAccessToken(_userExist)
        console.log(token)
        res.send({
          status: true,
          message: 'logged In',
          data: { token: token, user: _userExist },
        })
      }
      res.send({
        status: false,
        message: 'wrong password',
      })
    }
    res.send({
      status: false,
      message: 'wrong email',
    })
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    })
  }
})

export { router }
