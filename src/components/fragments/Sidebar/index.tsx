import { useRouter } from 'next/router';
import { Icon } from '@/components/Icon';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { signOut } from 'next-auth/react';

type PropTypes = {
  lists: Array<{
    title: string;
    url: string;
    icon: string;
  }>;
};

const Sidebar = (props: PropTypes) => {
  const { lists } = props;
  const { pathname } = useRouter();

  return (
    <div className='flex h-[100vh] w-[300px] flex-col justify-between bg-black p-7 text-white'>
      <div className=''>
        <h1 className='mb-10 text-2xl font-bold'>
          <Link href={'/'}>Admin Panel</Link>
        </h1>
        <div className='flex flex-col gap-2'>
          {lists.map((list, index) => (
            <Link
              key={list.title}
              href={list.url}
              className={`flex items-center gap-1 px-4 py-2 text-lg duration-300 hover:bg-white hover:text-black hover:ease-in-out ${
                pathname === list.url ? 'bg-blue-500' : ''
              }`}
            >
              <Icon name={`bx ${list.icon}`} size='24px' />
              <h2 className='text-md'>{list.title}</h2>
            </Link>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className='w-full bg-white'>
        <Button
          className='w-full p-2 text-black'
          type='button'
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
