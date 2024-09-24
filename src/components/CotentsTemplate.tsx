import { FC } from 'react';
import '@/styles/Reference.css';

export interface Props {
  title: string;
  description?: JSX.Element;
}

export const ContentsTemplate: FC<Props> = ({ title, description }) => {
  return (
    <main>
      <h5 className="contents-title">{title}</h5>
      <div className="Contents-Container">{description}</div>
    </main>
  );
};
