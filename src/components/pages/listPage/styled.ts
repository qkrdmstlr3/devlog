import styled, { mq } from '../../../common/style/styled';
import { SizeEnum } from '../../types';

export const Wrapper = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
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
  align-items: center;
  padding: 30px 0;

  font-family: 'NeoDunggeunmo', sans-serif;
  cursor: pointer;
  border-top: 1px solid black;
`;

export const ItemCategory = styled.div`
  text-align: center;
  font-size: 1.4rem;
`;

export const ItemTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  /* color: #2a52be; */

  ${mq(SizeEnum.small)} {
    font-size: 0.8rem;
  }
`;

export const ItemContent = styled.p`
  width: 70%;
  margin: 0 auto;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 1.1rem;
  opacity: 0.6;

  ${mq(SizeEnum.small)} {
    font-size: 0.5rem;
    width: 100%;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 40px 20px 40px;

  ${mq(SizeEnum.small)} {
    padding: 5px 10px;
  }
`;

export const ListName = styled.li`
  position: relative;
  padding-right: 100px;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 30px;
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
  font-size: 30px;

  ${mq(SizeEnum.small)} {
    font-size: 1rem;
    left: -20px;
  }
`;

export const BackButton = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
  font-family: 'NeoDunggeunmo', sans-serif;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${mq(SizeEnum.small)} {
    font-size: 13px;
  }
`;
