import { MockContent } from '@/api/__mock__/contents';
import '@/index.css';

const IndexPage = () => {
  return (
    <main>
      <div className="Container">
        {/* <Button>버튼</Button> */}
        {/* <div className="title-polygon"> */}
        <div className="title">📕 CSS </div>
        {/* </div> */}
        <div className="Card-Container">
          {MockContent.map(value => (
            <div className="Card">
              {/* <img src={value.image} alt="" /> */}
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
