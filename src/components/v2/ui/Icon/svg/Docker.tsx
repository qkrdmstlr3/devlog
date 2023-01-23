// Dependencies
import React from 'react';
import { IconSizeType, SizeEnum } from '../../types';

// Types

export type DockerProps = {
  size?: IconSizeType;
};

const sizes = {
  [SizeEnum.small]: '100',
  [SizeEnum.medium]: '200',
  [SizeEnum.large]: '70%',
};

function Docker({ size = SizeEnum.medium }: DockerProps) {
  return (
    <svg viewBox="0 0 512 512" width="100%" height={sizes[size]} xmlns="http://www.w3.org/2000/svg" fill="#099CEC">
      <g id="docker-icon">
        <g>
          <g className="third-floor">
            <rect className="docker" height="43.625" width="47.506" x="229.999" y="94.975" />
          </g>
          <g className="second-floor">
            <rect className="docker" height="43.193" width="47.505" x="117.738" y="147.225" />
            <rect className="docker" height="43.193" width="47.506" x="173.869" y="147.225" />
            <rect className="docker" height="43.193" width="47.506" x="229.999" y="147.225" />
          </g>
          <g>
            <rect className="docker" height="42.691" width="47.506" x="61.68" y="199.043"></rect>
            <rect className="docker" height="42.691" width="47.505" x="117.738" y="199.043" />
            <rect className="docker" height="42.691" width="47.506" x="173.869" y="199.043" />
            <rect className="docker" height="42.69" width="47.506" x="229.999" y="199.115" />
            <rect className="docker" height="42.691" width="47.507" x="286.2" y="199.043" />
          </g>
        </g>
        <path
          className="docker"
          d="M476.441,219.095c-10.35-6.972-34.21-9.487-52.537-6.036 c-2.371-17.249-12.003-32.27-29.538-45.782l-10.062-6.685l-6.685,10.062c-13.225,19.98-16.817,52.896-2.658,74.602     c-6.252,3.377-18.545,7.978-34.786,7.689H27.757c-6.252,36.511,4.169,83.945,31.624,116.501     c26.663,31.551,66.623,47.579,118.872,47.579c113.124,0,196.851-52.104,236.021-146.76c15.381,0.288,48.584,0.073,65.618-32.483     c1.078-1.797,4.743-9.488,6.107-12.291L476.441,219.095z"
        />
      </g>
    </svg>
  );
}

export default Docker;
