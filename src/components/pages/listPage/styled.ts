import styled, { mq } from '../../../common/style/styled';
import { SizeEnum } from '../../types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 30px;
  bottom: 50px;
`;

export const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  font-family: 'NeoDunggeunmo', sans-serif;
  cursor: pointer;
`;

export const ItemTitle = styled.h2`
  font-size: 2.5rem;
  /* color: #2a52be; */

  ${mq(SizeEnum.small)} {
    font-size: 1rem;
  }
`;

export const ItemContent = styled.p`
  width: 80%;
  margin: 10px 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 1.5rem;
  opacity: 0.6;

  ${mq(SizeEnum.small)} {
    font-size: 0.8rem;
    width: 100%;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 40px;

  ${mq(SizeEnum.small)} {
    padding: 5px 10px;
  }
`;

export const ListName = styled.li`
  position: relative;
  padding-right: 100px;
  font-family: 'NeoDunggeunmo', sans-serif;
  cursor: pointer;

  ${mq(SizeEnum.small)} {
    font-size: 1.2rem;
    padding-right: 10px;
  }
`;

export const Select = styled.div`
  position: absolute;
  left: -45px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;

  ${mq(SizeEnum.small)} {
    font-size: 1rem;
    left: -20px;
  }
`;

export const BackButton = styled.span`
  font-size: 30px;
  font-family: 'NeoDunggeunmo', sans-serif;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
