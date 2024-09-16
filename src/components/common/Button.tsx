'use client';
import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

const buttonStyle = cva(
  'rounded-lg gap-2 flex justify-center items-center transition-all duration-150 text-sm disabled:opacity-70',
  {
    defaultVariants: {
      block: false,
      kinds: 'primary',
      rounded: false,
      size: 'md',
    },
    variants: {
      block: { true: '!w-full' },
      kinds: {
        normal: 'border-white border bg-transparent hover:opacity-70',
        primary: 'bg-brown-700 text-white hover:bg-opacity-80 shadow-sm',
        secondary: 'bg-white hover:opacity-70',
      },
      rounded: {
        true: '!rounded-full',
      },
      size: {
        lg: 'px-10 py-4',
        md: 'px-4 py-2',
        sm: 'px-3.5 py-2.5',
      },
    },
  }
);

type Props = VariantProps<typeof buttonStyle> & {
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Props & {
    href?: never;
  };

type ButtonLinkProps = LinkProps &
  Props & {
    href: string;
    download?: boolean;
  };

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | ButtonLinkProps
>(
  (
    {
      href,
      className,
      children,
      size,
      kinds,
      block,
      isLoading,
      rounded,
      ...props
    }: ButtonProps | ButtonLinkProps,
    ref
  ) => {
    const inner = <>{children}</>;

    const style = classNames(
      buttonStyle({ block, kinds, rounded, size }),
      className
    );

    if (href) {
      return (
        <Link passHref {...(props as LinkProps)} className={style} href={href}>
          {inner}
        </Link>
      );
    }

    return (
      <button
        className={style}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {isLoading && (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-white" />
        )}
        {inner}
      </button>
    );
  }
);

Button.displayName = 'Button';
