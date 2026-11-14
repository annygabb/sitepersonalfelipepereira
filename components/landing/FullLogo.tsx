"use client";
import {useId} from 'react';
import {asset} from '@/content/assets';
/** Preserves the supplied mark; the SVG filter removes only its dark teal field. */
export default function FullLogo(){const id=useId().replace(/:/g,'');return <svg className="full-logo" viewBox="390 560 1220 880" role="img" aria-label="Felipe Pereira, personal trainer" xmlns="http://www.w3.org/2000/svg"><defs><filter id={id} colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 1 1 0 -0.6"/></filter></defs><image href={asset('/assets/brand/logo-integral.webp')} width="2000" height="2000" filter={`url(#${id})`}/></svg>}
