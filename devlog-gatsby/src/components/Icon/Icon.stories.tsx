import React from 'react';
import { StyleWrapper } from '../../common/style/styled';
import { SizeEnum } from '../types';
import Icon from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
};

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
        <div className="description">Small</div>
        <Icon icon="rightChevron" size={SizeEnum.large} />
      </div>
    </StyleWrapper>
  );
};
