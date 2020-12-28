import styled from '@Style/styled';

export const Form = styled.form`
  padding: 20px;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PageTitle = styled.h1`
  padding: 15px;

  font-size: 3rem;
  font-weight: bold;
  text-align: right;
`;

export const Dropdown = styled.select`
  width: 150px;
  height: 30px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 25px;
  margin: 20px 0;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 70%;
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 10px;
  float: right;

  background-color: white;
  border: 1px solid black;
  font-size: 1.2rem;
`;
