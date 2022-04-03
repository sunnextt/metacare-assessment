import styled from 'styled-components';

const CtopMenu = styled.div`
  padding: 0 3.5rem;
  border: 1px solid #ecebf5;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;
export const Ul = styled.ul`
  text-decoration: none;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;

  @media only screen and (max-width: 600px) {
    gap: 1rem;
  }
`;
export const Li = styled.li`
  border: none;
  padding-bottom: 1rem;
  -webkit-transition: border 500ms ease-out;
  -moz-transition: border 500ms ease-out;
  -o-transition: border 500ms ease-out;
  transition: border 500ms ease-out;
  &:hover {
    border-bottom: 2px solid #6837ef;
  }
`;

export const TMButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  font-family: 'Gelion regular';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    font-family: 'Gelion bold';
  }
`;

export default CtopMenu;
