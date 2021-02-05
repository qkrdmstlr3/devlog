import styled from '../../../common/style/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  font-family: neodgm, sans-serif;
  cursor: pointer;
`;

export const ItemTitle = styled.h2`
  font-size: 2.5rem;
  color: #2a52be;
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
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 40px;
`;

export const ListName = styled.li`
  position: relative;
  padding-right: 100px;
  font-family: neodgm, sans-serif;
  cursor: pointer;
`;

export const Select = styled.div`
  position: absolute;
  left: -45px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
`;

export const BackButton = styled.span`
  font-size: 30px;
  font-family: neodgm, sans-serif;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
