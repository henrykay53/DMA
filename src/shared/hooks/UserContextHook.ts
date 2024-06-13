import { useEffect } from 'react';
import * as api from '../types/API';
import { useUserContext } from './UserContext';

export const GetAuthUser = () => {
  const { user, setUser } = useUserContext();
  useEffect(() => {
    async function getLoggedInUser() {
      try {
        if (!user) {
          const authUser = await api.getUser();
          setUser(authUser);
        }
      } catch {}
    }
    getLoggedInUser();
  }, []);

  return user;
};
