import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 35%;
`;

export const LeftWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 150%;
`;

export const RightWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
`;

export const SkillBox = styled.div`
  height: 100%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Skill = styled.span`
  position: relative;
  cursor: pointer;
`;

export const Select = styled.span`
  position: absolute;
  margin-right: 15px;
  left: -60px;
`;

export const SkillTypeBox = styled.div`
  height: 100%;
  display: flex;
  font-size: 35px;
  align-items: flex-end;
  padding: 20px;
`;
