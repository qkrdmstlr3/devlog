import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
`;

export const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  font-family: 'NeoDunggeunmo', sans-serif;
  cursor: pointer;

  a {
    width: 100%;
  }

  &:hover {
    h2 {
      color: black;
    }
  }
`;

export const ItemCategory = styled.div`
  text-align: center;
  font-size: 1.4rem;
`;

export const ItemTitle = styled.h2`
  margin: 5px 0;
  font-size: 1.8rem;
  text-align: center;
  color: #2a52be;
  /* color: #d23669; */
`;

export const ItemContent = styled.p`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.1rem;
  opacity: 0.6;
  word-break: keep-all;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0px 0px 0px 40px;
`;

export const CategoryItem = styled.li`
  position: relative;
  padding-right: 100px;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 30px;
  cursor: pointer;
`;

export const Select = styled.div`
  position: absolute;
  left: -45px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
`;

export const BackButton = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
  font-family: 'NeoDunggeunmo', sans-serif;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
