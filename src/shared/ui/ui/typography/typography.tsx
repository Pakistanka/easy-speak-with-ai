import { cn } from '@/shared/lib/utils';
import * as React from 'react';

const typographyVariants = {
  // Title
  title: 'text-title',
  titleBold: 'text-title-bold',
  
  // Heading1
  heading1: 'text-heading1',
  heading1Bold: 'text-heading1-bold',
  
  // Heading2
  heading2: 'text-heading2',
  heading2Bold: 'text-heading2-bold',
  
  // Heading3
  heading3: 'text-heading3',
  heading3Bold: 'text-heading3-bold',
  
  // Heading4
  heading4: 'text-heading4',
  heading4Bold: 'text-heading4-bold',
  
  // Body
  body: 'text-body',
  bodyBold: 'text-body-bold',
  
  // Body Small
  bodySmall: 'text-body-small',
  bodySmallBold: 'text-body-small-bold',
  
  // Description
  description: 'text-description',
  descriptionBold: 'text-description-bold',
  
  // Description Small
  descriptionSmall: 'text-description-small',
  descriptionSmallBold: 'text-description-small-bold',
} as const;

type TypographyVariant = keyof typeof typographyVariants;

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        className={cn(typographyVariants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = 'Typography';

// Специализированные компоненты
export const Title = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="title" as="h1" {...props} />);

export const TitleBold = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="titleBold" as="h1" {...props} />);

export const Heading1 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="heading1" as="h1" {...props} />);

export const Heading1Bold = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="heading1Bold" as="h1" {...props} />);

export const Heading2 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="heading2" as="h2" {...props} />);

export const Heading2Bold = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="heading2Bold" as="h2" {...props} />);

export const Heading3 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="heading3" as="h3" {...props} />);

export const Heading3Bold = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="heading3Bold" as="h3" {...props} />);

export const Heading4 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="heading4" as="h4" {...props} />);

export const Heading4Bold = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="heading4Bold" as="h4" {...props} />);

export const Body = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="body" as="p" {...props} />);

export const BodyBold = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="bodyBold" as="p" {...props} />);

export const BodySmall = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="bodySmall" as="p" {...props} />);

export const BodySmallBold = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="bodySmallBold" as="p" {...props} />);

export const Description = React.forwardRef<
  HTMLSpanElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="description" as="span" {...props} />);

export const DescriptionBold = React.forwardRef<
  HTMLSpanElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="descriptionBold" as="span" {...props} />);

export const DescriptionSmall = React.forwardRef<
  HTMLSpanElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="descriptionSmall" as="span" {...props} />);

export const DescriptionSmallBold = React.forwardRef<
  HTMLSpanElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography ref={ref} variant="descriptionSmallBold" as="span" {...props} />);

export { Typography };