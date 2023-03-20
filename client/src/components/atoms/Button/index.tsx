import React, { Children, MouseEvent } from 'react';
import clsx from 'clsx';
import Spinner from '../Spinner';
export type ButtonProps = {
    variant: 'primary' | 'ghost' | 'success' | 'info' | 'warning' | 'danger' | 'black'
    size?: 'small' | 'medium' | 'large'
    loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
    variant = 'primary',
    size = 'large',
    loading = false,
    children,
    ...attributes
}: ButtonProps) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (!loading && attributes.onClick) {
            attributes.onClick(e)
        }
    }

    const variantClassname = clsx({
        ['bg-indigo-600']: variant === 'primary',
        ['bg-emerald-500']: variant === 'success',
        ['bg-blue-600']: variant === 'info',
        ['bg-amber-400']: variant === 'warning',
        ['bg-rose-600']: variant === 'danger',
        ['bg-sky-100']: variant === 'ghost',
        ['bg-black']: variant === 'black',
    })

    const sizeClassname = clsx({
        ['btn-large']: size === 'large',
        ['btn-medium']: size === 'medium',
        ['btn-small']: size === 'small',
    })
    const ButtonRef = React.createRef<HTMLButtonElement>();

    return (
        <button
            {...attributes}
            className={clsx(
                "btn text-sm font-medium px-5 py-3 block",
                variantClassname,
                sizeClassname,
                attributes.className
            )}
            disabled={attributes.disabled || loading}
            ref={ButtonRef}
            onClick={handleClick}
        >
            {loading ? (
                <Spinner size={size} variant={"secondary"} />
            ) : (
                Children.map(children, (child, i) => {
                    return (
                        <span key={i} className="mr-xsmall last:mr-0">
                            {child}
                        </span>
                    )
                })
            )}
        </button>
    );
};

export default Button;