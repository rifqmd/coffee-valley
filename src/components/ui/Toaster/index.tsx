import { Icon } from '@/components/Icon';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type PropTypes = {
  variant: string;
  message?: string;
  setToaster: Dispatch<SetStateAction<{}>>;
};

const toasterVariant: any = {
  success: {
    title: 'Success',
    icon: 'bx-check-circle',
    color: '#a3d9a5',
    barColor: '#3f9242',
  },
  error: {
    title: 'Error',
    icon: 'bxs-x-circle',
    color: '#f39b9a',
    barColor: '#bb2525',
  },
  warning: {
    title: 'Warning',
    icon: 'bx-error-circle',
    color: '#f8e3a2',
    barColor: '#e9b949',
  },
  info: {
    title: 'Info',
    icon: 'bx-info-circle',
    color: '#93c5fd',
    barColor: '#3b82f6',
  },
};

const Toaster = (props: PropTypes) => {
  const { variant = 'warning', message, setToaster } = props;
  const [lengthBar, setLengthBar] = useState(100);
  const timerRef = useRef<any>(null);

  // timer bar
  const timerStart = () => {
    timerRef.current = setInterval(() => {
      setLengthBar((prevLength) => prevLength - 0.09);
    }, 1);
  };

  useEffect(() => {
    timerStart();
  }, []);

  return (
    <div className='fixed bottom-5 left-1/2 z-[999] translate-x-[-50%] overflow-hidden rounded-lg border-2 bg-white px-6 py-5 shadow shadow-slate-400/50'>
      {/* main */}
      <div className='flex items-center justify-center gap-3'>
        {/* icon */}
        <div className=''>
          <Icon
            name={`bx ${toasterVariant[variant].icon}`}
            size='32px'
            color={`${toasterVariant[variant].barColor}`}
          />
        </div>
        {/* text */}
        <div className='min-w-[200px]'>
          <p className='mb-1 font-bold'>{toasterVariant[variant].title}</p>
          <p className=''>{message}</p>
        </div>

        {/* close button */}
        <div
          className='absolute right-3 top-3 cursor-pointer'
          onClick={() => setToaster({})}
        >
          <Icon name={`bx bx-x`} size='24px' />
        </div>
      </div>

      {/* timer */}
      <div
        className='absolute bottom-0 left-0 h-[6px] w-full bg-black'
        style={{ backgroundColor: toasterVariant[variant].color }}
      >
        <div
          className='h-full'
          style={{
            width: `${lengthBar}%`,
            backgroundColor: toasterVariant[variant].barColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Toaster;
