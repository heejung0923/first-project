import '@/styles/Reference.css';

export const Reference = () => {
  return (
    <>
      <h3>참고자료</h3>
      {MockURL.map(value => (
        <p onClick={() => (window.location.href = `${value.url}`)}>{value.title}</p>
      ))}
      <p></p>
    </>
  );
};

export interface URLType {
  id: number;
  url: string;
  title: string;
}

export const MockURL: URLType[] = [
  {
    id: 1,
    url: 'https://quickref.me/css3.html',
    title: 'QuickRef.Me',
  },
  {
    id: 2,
    url: 'https://caniuse.com',
    title: 'Can I use',
  },
];
