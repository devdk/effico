'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import BoringAvatar from 'boring-avatars';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'src/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Maybe } from 'services/types/generated';

const avatarVariants = cva(
  'rounded-full overflow-hidden inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        beam: '',
        marble: '',
        pixel: '',
        sunset: '',
        ring: '',
      },
      size: {
        xxs: 'w-6 h-6',
        xs: 'w-8 h-8',
        sm: 'w-9 h-9',
        default: 'w-[46px] h-[46px]',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16',
        xxl: 'w-[100px] h-[100px]',
      },
    },
    defaultVariants: {
      variant: 'marble',
      size: 'default',
    },
  }
);

// Map our size variant to numeric pixel sizes for BoringAvatar
const sizeMap: Record<
  'sm' | 'default' | 'lg' | 'xl' | 'xs' | 'xxs' | 'xxl',
  number
> = {
  xxs: 24,
  xs: 32,
  sm: 36,
  default: 46,
  lg: 48,
  xl: 64,
  xxl: 100,
};

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  name?: string | Maybe<string>;
  colors?: string[];
  src?: string | Maybe<string>;
  link?: string;
  className?: string;
  asChild?: boolean;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      name,
      colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
      variant,
      size,
      src,
      link,
      className,
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Use the Slot if asChild is true, otherwise render a div.
    const Comp = asChild ? Slot : 'div';

    // Determine the inner content based on whether a src is provided.
    const content = src ? (
      <Image
        height={100}
        width={100}
        src={src}
        alt={name || 'John Doe'}
        className="object-cover w-full h-full"
      />
    ) : (
      <BoringAvatar
        size={sizeMap[size || 'default']}
        name={name || 'John Doe'}
        variant={variant || 'marble'}
        colors={colors}
      />
    );

    // Wrap in the main container
    const avatarElement = (
      <Comp
        ref={ref}
        className={cn(avatarVariants({ variant, size, className }))}
        {...props}
      >
        {content}
      </Comp>
    );

    if (link) {
      return <Link href={link}>{avatarElement}</Link>;
    }

    return avatarElement;
  }
);
Avatar.displayName = 'Avatar';

export { Avatar, avatarVariants };
