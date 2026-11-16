import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required',
      });
    }

    const passwordHashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: passwordHashed,
    });

    res.status(201).json({
      message: 'User registered',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const login = (req, res) => {
  res.json('Usuario logueado');
};
