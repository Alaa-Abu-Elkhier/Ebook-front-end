import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export const useLoginMutation = (options) => {
  const navigate = useNavigate();
  return useMutation(
    (credentials) => loginUser(credentials),
    {
      ...options,
      onSuccess: () => {
        // Redirect to the home page on successful login
        navigate('/');
      },
    }
  );
};
