import { MockURL } from '@/api/__mock__/url';
import '@/styles/Reference.css';
import { ContentsTemplate } from './CotentsTemplate';
import { AttributeSelectors, StructuralPseudoText, TextType, UserPseudoText } from '@/api/__mock__/contentsText';
import { FC } from 'react';
import { Divider } from 'antd';

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
        <h4>Animation</h4>
        <ul>
          <li>
            <code>@keyframes</code> 애니메이션의 중간 상태를 정의할 수 있음
            <br />
            <code>animation-name</code> 균일한 속도 <br />
            <ul>
              <li>
                가능: <code>name _name -name</code>
              </li>
              <li>
                불가능: <code>1name(숫자로 시작하는 이름), @name(특수문자로 시작하는 이름) </code>
              </li>
            </ul>
            <br />
            <code>animation-duration</code> 중간으로 갈수록 속도가 증가하고 끝 부분에서는 느려짐 <br />
            <code>animation-delay</code> 엘리먼트가 로드되고 <b>언제 시작될지</b> 지정 <br />
            <ul>
              <li>0: 기본값, 속성 적용하자마자 시작</li>
              <li>now: 0과 같은 설정</li>
              <li>숫자와 단위:설정한 시간 뒤에 시작</li>
            </ul>
            <br />
            <code>animation-direction</code> 종료되고 <b>다시 처음으로 시작</b>할지, <b>역방향으로 진행할지 </b>
            <ul>
              <li>
                <code>@keyframe</code>에서 from과 to 설정 스타일이 순방향, to ~ from은 역방향
              </li>
              <li>
                <code>normal</code>: 순방향
              </li>
              <li>
                <code>alternate</code>(뜻이 번갈아 하는): 역방향, 순방향 번갈아 재생
              </li>
              <li>
                <code>reverse</code>: 역재생
              </li>
              <li>
                <code>alternate-reverse</code>: 역재생을 번갈아
              </li>
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
      <div>
        <h3>단위</h3>
        <h4>절대 단위</h4>
        <ul>
          <li>주변 요소에 영향을 받지 않고 고정된 수치</li>
          <li>px(픽셀)</li>
          <ul>
            <li>화면에서 가장 작은 단위</li>
          </ul>

          <li>deg</li>
          <ul>
            <li>각도 단위로 회전을 나타냄</li>
          </ul>
          <Divider />

          <li>in, cm, mm</li>
          <ul>
            <li>화면이나 인쇄물의 크기</li>
          </ul>

          <li>pt(포인트), pc(파이카)</li>
          <ul>
            <li>인쇄에서 사용되는 단위</li>
          </ul>
        </ul>
        <h4>상대 단위</h4>
        <ul>
          <li>%</li>
          <ul>
            <li>부모 요소 기준으로 비율 표현</li>
          </ul>
        </ul>

        <ul>
          <li>em</li>
          <ul>
            <li>부모의 폰트 사이즈를 상속받음</li>
            <li>만약 부모요소가 정해져 있지않으면, 자동으로 1em=16px</li>
            <li>
              <code>rem</code>: 최상위 태그에 기준(주로 html 태그)
            </li>
          </ul>

          <li>vh & vw (vertical height & vertical width)</li>
          <ul>
            <li>css 너비값은 가장 가까운 부모 요소에 상대적인 영향을 받음</li>
            <li>타겟요소를 뷰포트의 너비값, 높이값에 맞게 사용할 수 있음</li>
            <li>브라우저 높이값이 900px일때, 1vh는 9px</li>
          </ul>

          <li>vmin & vmax</li>
          <ul>
            <li>뷰 포트 너비값, 높이값의 상대적인 영향의 최대,최소값</li>
            <li>만약 너비 1100px, 높이 700px일때 1vmin은 7px, 1max는 11px</li>
          </ul>
          <li>ex(엑스) & ch(씨-에이치)</li>
          <ul>
            <li>em과 rem은 font-family에 의존한다면 다른 두 단위(ex, ch)는 폰트의 특정 수치에 기반</li>
            <li>ch단위, 제로 문자인 숫자 0의 너비값의 "고급 척도"</li>
            <ul>
              <li>
                monospace 폰트의 N의 너비값을 부여받았다는 것이며, width:40ch;는 40개의 문자열을 포함하고 있다는 뜻
              </li>
            </ul>
            <li>ex 단위의 정의는 "현재 폰트의 소문자 x-높이값 또는 em의 절반값이다.</li>
            <ul>
              <li>x-높이값은 소문자 x의 높이값이기도 함</li>
              <li>주로 폰트의 중간지점을 알아내기 위해 사용</li>
              <li>타이포그래픽에서 세밀한 조정을 할 때</li>
            </ul>
          </ul>
          <ul>
            <li></li>
          </ul>
        </ul>
      </div>
    </main>
  );
};
