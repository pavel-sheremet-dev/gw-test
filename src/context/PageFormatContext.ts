import { createContext } from 'react';

export type Format = 'response' | 'mobile' | 'tablet' | 'desktop';

export const PageFormatContext = createContext<Format>('response');
