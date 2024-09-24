import { MockContent } from '@/api/__mock__/contents';
import '@/index.css';

const IndexPage = () => {
  return (
    <main>
      <div className="Container">
        <div className="title">📕 CSS </div>
        <div className="Card-Container">
          {MockContent.map(value => (
            <div className="Card">
              <div className="Card-Contents">
                <p>{value.component && <value.component />}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
