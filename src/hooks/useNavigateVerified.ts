import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';

import type { FileRouteTypes } from '@/routeTree.gen';

import { isEmailVerified } from '@/services/auth';

export function useNavigateVerified() {
  const navigate = useNavigate();

  // Judge the current user's email verification status
  async function navigateEmailVerified({ to }: { to: FileRouteTypes['to'] }) {
    const isVerified = await isEmailVerified();
    if (isVerified) navigate({ to });
    else {
      // If not verified, go to the email verification page
      navigate({ to: '/auth/$pathname', params: { pathname: 'email-otp' } });
      toast.error('Please verify your email first.', { position: 'top-center', richColors: true });
      // toast.error('Please verify your email first.');
    }
  }

  // async function navigateToEditor() {
  //   const isVerified = await isEmailVerified();
  //   if (isVerified) navigate({ to: '/articles/draft' });
  //   else navigate({ to: '/auth/$pathname', params: { pathname: 'email-otp' } });
  // }

  return {
    navigateEmailVerified,
  };
}
