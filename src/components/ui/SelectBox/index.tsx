// Dependencies
import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as Style from './styled';

// Components
import BorderBox from '../BorderBox';
import { SELECT_OPTION_TYPE } from '../../../hooks/useGame';
import useKeyboard from '../../../hooks/useKeyboard';

interface SelectBoxProps {
  onClickOption: (type: SELECT_OPTION_TYPE) => void;
}

function SelectBox({ onClickOption }: SelectBoxProps) {
  const selector = [
    [
      { text: '싸우기', onClick: () => onClickOption('fight') },
      { text: '글목록', onClick: () => navigate('/') },
    ],
    [
      { text: '포켓몬', onClick: () => onClickOption('pokemon') },
      { text: '가방', onClick: () => {} },
    ],
  ];

  const [coor, setCoor] = useState([0, 0]);
  useKeyboard({
    keyEvents: [
      { key: 'ArrowUp', keyEvent: () => setCoor([Math.max(0, coor[0] - 1), coor[1]]) },
      { key: 'ArrowDown', keyEvent: () => setCoor([Math.min(1, coor[0] + 1), coor[1]]) },
      { key: 'ArrowRight', keyEvent: () => setCoor([coor[0], Math.min(1, coor[1] + 1)]) },
      { key: 'ArrowLeft', keyEvent: () => setCoor([coor[0], Math.max(0, coor[1] - 1)]) },
      { key: 'Space', keyEvent: () => selector[coor[0]][coor[1]].onClick() },
    ],
  });

  const mouseEnterHandler = (row: number, col: number) => setCoor([row, col]);

  return (
    <Style.Wrapper>
      <BorderBox height="100%" />
      <Style.NavContainer>
        <BorderBox width="100%" height="100%">
          <Style.Nav>
            {selector.map((row, rowIndex) =>
              row.map((col, colIndex) => (
                <Style.NavItem
                  key={col.text}
                  onMouseEnter={() => mouseEnterHandler(rowIndex, colIndex)}
                  onClick={col.onClick}
                >
                  {coor[0] === rowIndex && coor[1] === colIndex && <Style.Select>▶</Style.Select>}
                  {col.text}
                </Style.NavItem>
              ))
            )}
          </Style.Nav>
        </BorderBox>
      </Style.NavContainer>
    </Style.Wrapper>
  );
}

export default SelectBox;
