import { FC } from 'react';
import { PSeudoClasses, Reference } from '@/components/CSS';

export interface MockContentType {
  id: number;
  title: string;
  image: string;
  component?: FC;
  url: string;
}

export const MockContent: MockContentType[] = [
  {
    id: 1,
    title: '[CSS] CSS Selector 정리',
    image: '/CSS.png',
    component: Reference,
    url: 'https://heedymy.tistory.com/68',
  },
  {
    id: 2,
    title: '[CSS] CSS Selector 정리',
    component: PSeudoClasses,
    image: '/CSS.png',
    url: 'https://heedymy.tistory.com/68',
  },
];
