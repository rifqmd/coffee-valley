import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data } = useSession();
  return (
    <div className='flex h-14 w-full items-center justify-end bg-black text-white'>
      <button
        className='mr-5 border-none bg-white px-2 py-1 text-black'
        onClick={() => (data ? signOut() : signIn())}
      >
        {data ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Navbar;
