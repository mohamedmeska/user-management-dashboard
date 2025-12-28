import { Request, Response } from 'express';
import * as UserService from './user.service';

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  res.json(users);
};

export const addUser = async (req: Request, res: Response) => {
  const user = await UserService.createUser(req.body);
  res.status(201).json(user);
};
