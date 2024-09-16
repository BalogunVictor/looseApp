import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

export function Card({
  as: Component = 'div',
  className,
  children,
}: CardProps) {
  return (
    <Component
      className={classNames(
        `flex flex-col rounded-xl shadow-xl overflow-hidden`,
        className
      )}
    >
      {children}
    </Component>
  );
}
