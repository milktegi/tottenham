import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Jersey from '../../../Resources/images/totjersey.jpg';

const PromotionAnimation = () => {
  return (
    <div className="promotion_animation">
      <div className="left">
        <Zoom>
          <div>
            <span>팀 유니폼</span>
            <span>당첨 이벤트!</span>
          </div>
        </Zoom>
      </div>

      <div className="right">
        <Zoom>
          <div
            style={{
              background: `url(${Jersey}) no-repeat`,
              width: '400px',
              height: '400px'
            }}
          />
        </Zoom>
      </div>
    </div>
  );
};

export default PromotionAnimation;
