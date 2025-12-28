import { UserModel, IUser } from './user.model';

export const getAllUsers = async (): Promise<IUser[]> => {
  return UserModel.find().lean();
};

export const createUser = async (data: Partial<IUser>): Promise<IUser> => {
  return UserModel.create(data);
};
