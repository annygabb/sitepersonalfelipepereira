import type {ComponentProps} from 'react';

type Props = ComponentProps<'button'> & {variant?: 'default' | 'ghost'; size?: 'default' | 'icon'};

export function PlanButton({className='',variant='default',size='default',...props}:Props) {
  const base="inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";
  const variantClass=variant==='ghost'?'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50':'bg-primary text-primary-foreground hover:bg-primary/90';
  const sizeClass=size==='icon'?'size-9':'h-9 px-4 py-2 has-[>svg]:px-3';
  return <button data-slot="button" data-variant={variant} data-size={size} className={`${base} ${variantClass} ${sizeClass} ${className}`} {...props}/>;
}
