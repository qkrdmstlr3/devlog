import React from 'react';
import styled from '../../../common/style/styled';
import { SizeEnum } from '../../types';
import Icon from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
};

const StyleWrapper = styled.div`
  .description {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const rightChevron = (): React.ReactElement => {
  return (
    <StyleWrapper>
      <div>
        <div className="description">Small</div>
        <Icon icon="rightChevron" size={SizeEnum.small} />
      </div>
      <div>
        <div className="description">Medium</div>
        <Icon icon="rightChevron" size={SizeEnum.medium} />
      </div>
      <div>
        <div className="description">Large</div>
        <Icon icon="rightChevron" size={SizeEnum.large} />
      </div>
    </StyleWrapper>
  );
};

export const ReactIcon = (): React.ReactElement => {
  return (
    <StyleWrapper>
      <div>
        <div className="description">Small</div>
        <Icon icon="react" size={SizeEnum.small} />
      </div>
      <div>
        <div className="description">Medium</div>
        <Icon icon="react" size={SizeEnum.medium} />
      </div>
      <div>
        <div className="description">Large</div>
        <Icon icon="react" size={SizeEnum.large} />
      </div>
    </StyleWrapper>
  );
};
