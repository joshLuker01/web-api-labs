import express from 'express';
import User from './userModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

router.post('/', async (req, res) => {
  const user = await User(req.body).save();

  res.status(201).json({
    code: 201,
    msg: 'Successfully created new user.',
    user,
  });
});

export default router;