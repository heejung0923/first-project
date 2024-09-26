import '@/styles/practice.style.scss';

const PracticePage = () => {
  return (
    <main>
      <div className="Container">
        <div className="Practice-Box">
          <h3>display</h3>
          <div className="display-box">
            <a>a</a>
            <span>span</span>
            <div>div여도 줄바꿈 안일어남</div>
          </div>
          <div className="button-box">
            <h3>scss</h3>
            <button className="scss-button-blue">blue</button>
            <button>green</button>
          </div>
          <div className="button-box">
            <button className="selector-button blue">blue</button>
            <button className="selector-button green">green</button>
          </div>
          <div className="position-box">
            <h3>position</h3>
            <div>
              <div className="position-message-1">message</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PracticePage;
