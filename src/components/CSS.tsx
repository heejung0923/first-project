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

export const InputPseudoClasses = () => {
  return (
    <main>
      <ContentsTemplate
        title="💻 Input Pseudo Classes(입력 가상 클래스)"
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

export const Translate = () => {
  return (
    <main>
      <div>
        <h3>translate</h3>
        <ul>
          <li>
            <code>transform: translate(x축, y축)</code>
          </li>
          <li>
            transform 속성에 사용할 수 있는 변형함수 중 하나로 <b>이동효과를 담당</b>한다.
          </li>
          <li>
            <code>translate(x, y)</code>,<br />
            <code>translate3d(x, y, z)</code>,<br />
            <code>translateX(x)</code>,<br />
            <code>translateY(y)</code>
            <br />,<code>translateZ(z)</code>:Z축으로 이동, <br />
            <code>rotate()</code>: 회전하는 함수 <br />
            <code>rotate(), rotateX(), rotateY(), rotateZ(), rotate3d()</code> <br />
            <code>scale()</code>: 크기조절 함수 <br />
            <code>skew()</code>: 기울이기 함수 <br />
          </li>
        </ul>
      </div>
      <div>
        <h3>transition</h3>
        <ul>
          <li>
            <code>transition: name | duration | delay | timing function | delay</code>
          </li>
          <li>css 속성을 변경할 때 두 가지 상태 사이에 일어나는 변화(애니메이션)를 커스터마이징할 때 사용</li>
          <li>변화의 양상을 어느정도 원하는대로 커스터마이징 가능</li>
        </ul>
      </div>
      <div>
        <h3>timing function</h3>
        <ul>
          <li>
            <code>linear</code> 균일한 속도 <br />
            <code>ease</code> 중간으로 갈수록 속도가 증가하고 끝 부분에서는 느려짐 <br />
            <code>ease-in</code> 전환 속도가 완료될 때까지 천천히 시작 <br />
            <code>ease-out</code> 빠르게 시작해서 느려지고 계속됨 <br />
            <code>ease-in-out</code> 천천히 전환되고 빨라진 다음 다시 느려짐 <br />
          </li>
        </ul>
      </div>
      <div>
        <h3>Animation</h3>
        <ul>
          <li>
            <li>
              <code>@keyframes</code> 애니메이션의 중간 상태를 정의할 수 있음
            </li>
            <code>animation-name</code> 균일한 속도 <br />
            <ul>
              <li>
                가능: <code>name _name -name</code>
              </li>
              <li>
                불가능: <code>1name(숫자로 시작하는 이름), @name(특수문자로 시작하는 이름) </code>
              </li>
            </ul>
            <code>animation-duration</code> 중간으로 갈수록 속도가 증가하고 끝 부분에서는 느려짐 <br />
            <code>animation-delay</code> 엘리먼트가 로드되고 <b>언제 시작될지</b> 지정 <br />
            <ul>
              <li>0: 기본값, 속성 적용하자마자 시작</li>
              <li>now: 0과 같은 설정</li>
              <li>숫자와 단위:설정한 시간 뒤에 시작</li>
            </ul>
            <code>animation-direction</code> 종료되고 <b>다시 처음으로 시작</b>할지, <b>역방향으로 진행할지 </b>
            <ul>
              <li>@keyframe에서 from과 to 설정 스타일이 순방향, to ~ from은 역방향</li>
              <li>normal: 순방향</li>
              <li>alternate(뜻이 번갈아 하는): 역방향, 순방향 번갈아 재생</li>
              <li>reverse: 역재생</li>
              <li>alternate-reverse: 역재생을 번갈아</li>
            </ul>
            <br />
            <code>animation-iteration-count</code> 몇 번 반복될지 지정 <code>infinite</code>로 지정하여 무한반복 가능
            <br />
            <code>animation-play-state</code>애니메이션을 다시 시작할 수 있음
            <br />
            <code>animation-timing-function</code>중간 상태들의 전환을 어떤 시간 간격으로 진행할지 지정
            <br />
            <code>animation-fill-mode</code>시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정
            <br />
          </li>
        </ul>
      </div>
    </main>
  );
};
