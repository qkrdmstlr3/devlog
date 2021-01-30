// Dependencies
import React from 'react';
import * as Style from './styled';

interface BorderBoxProps {
  /** 하위 element들 */
  children: React.ReactNode;
  /** 주어진 넓이 */
  width?: string;
  /** 주어진 높이 */
  height?: string;
}

function BorderBox({
  children,
  width = '100%',
  height = '100%',
}: BorderBoxProps) {
  return (
    <Style.OutWrapper width={width} height={height}>
      <Style.InnerWrapper width={width} height={height}>
        {children}
      </Style.InnerWrapper>
    </Style.OutWrapper>
  );
}

export default BorderBox;
