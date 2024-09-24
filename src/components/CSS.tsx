import { MockURL } from '@/api/__mock__/url';
import '@/styles/Reference.css';
import { ContentsTemplate } from './CotentsTemplate';
import { AttributeSelectors, StructuralPseudoText, TextType, UserPseudoText } from '@/api/__mock__/contentsText';
import { FC } from 'react';

export const Reference = () => {
  return (
    <main>
      <h3>👩🏻‍💻</h3>
      <h3>Reference</h3>
      <ul>
        <li> pseudo classes, selector</li>
        <li>
          <a href="https://heedymy.tistory.com/68">블로깅 ✨</a>
        </li>
      </ul>
      <div className="Contents-Container pointer">
        {MockURL.map(value => (
          <p onClick={() => (window.location.href = `${value.url}`)}>{value.title}</p>
        ))}
      </div>
    </main>
  );
};

export const DescriptionBox: FC<TextType> = ({ code, description }) => {
  return (
    <p>
      <code>{code}</code>: {description}
    </p>
  );
};

export const PSeudoClasses = () => {
  return (
    <main>
      <ContentsTemplate
        title="💻 User action pseudo classes(사용자 행동 가상 클래스)"
        description={
          <>
            <div className="structural-container">
              <a href="/" className="a-action">
                link
              </a>
              {UserPseudoText.map(value => (
                <DescriptionBox code={value.code} description={value.description} id={value.id} />
              ))}
            </div>
          </>
        }
      />
    </main>
  );
};

export const StructuralPseudoClasses = () => {
  return (
    <main>
      <ContentsTemplate
        title="💻 Structural pseudo classes(구조 의사 클래스)"
        description={
          <div className="structural-container">
            {StructuralPseudoText.map(value => (
              <DescriptionBox id={value.id} code={value.code} description={value.description} />
            ))}
          </div>
        }
      />
    </main>
  );
};

export const AttributeSelector = () => {
  return (
    <main>
      <ContentsTemplate
        title="💻 Attribute Selector(특성 선택자)"
        description={
          <div className="structural-container">
            {AttributeSelectors.map(value => (
              <DescriptionBox id={value.id} code={value.code} description={value.description} />
            ))}
          </div>
        }
      />
    </main>
  );
};
