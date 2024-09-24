import { MockURL } from '@/api/__mock__/url';
import '@/styles/Reference.css';

export const Reference = () => {
  return (
    <main>
      <h3>👩🏻‍💻</h3>
      <h3>참고자료</h3>
      <div className="Contents-Container">
        {MockURL.map(value => (
          <p onClick={() => (window.location.href = `${value.url}`)}>{value.title}</p>
        ))}
      </div>
    </main>
  );
};

export const PSeudoClasses = () => {
  return <>ss</>;
};
