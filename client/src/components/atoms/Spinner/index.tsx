import clsx from 'clsx';

type SpinnerProps = {
    size?: 'large' | 'medium' | 'small';
    variant?: 'primary' | 'secondary';
}

const Spinner = ({ size = 'large', variant = 'primary' }) => {
    return (
        <div className='flex justify-center items-center'>
            <div
                className={clsx(
                    'flex items-center justify-center',
                    { 'h-[24px] w-[24px]': size === 'large' },
                    { 'h-[20px] w-[20px]': size === 'medium' },
                    { 'h-[16px] w-[16px]': size === 'small' }
                )}
            >
                <div className='flex items-center justify-center relative w-full h-full'>
                    <div
                        className={clsx(
                            'animate-spin border-2 h-4/5 w-4/5 border-gray-500 rounded-full',
                            { 'border-t-grey-0': variant === 'primary' },
                            { 'border-t-violet-60': variant === 'secondary' }
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Spinner;