import { createContext, useContext, useState } from 'react';
import { User } from '../types/User';

type UserType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
const UserContext = createContext<UserType>({} as UserType);
interface UserContextProps {
  children: any;
}

export const UserProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserContext;
export const useUserContext = () => useContext(UserContext);
