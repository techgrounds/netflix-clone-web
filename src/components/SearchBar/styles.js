import styled, { css } from 'styled-components/macro';
import { IconSearch } from '../Icons/IconSearch';

export const Container = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  transition: all 0.5s;
  margin-right: 1.25rem;
  cursor: pointer;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 0.5rem;

  /* ${({ hover }) =>
    hover &&
    css`
      width: 270px;
    `} */
  ${({ hover }) =>
    hover &&
    css`
      width: 270px;
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 34px;
  outline: 0;
  border: 1px solid var(--white);
  color: var(--white);

  background: transparent;
  font-size: 14px;
  padding: 0 20px 0 30px;
  margin: 0;
  appearance: none;
  vertical-align: middle;
  cursor: pointer;
  display: ${(props) => (props.showSearchInput ? 'block' : 'none')};
`;

export const SearchIcon = styled(IconSearch)`
  position: absolute;
  ${({ hover }) =>
    hover &&
    css`
      left: 0;
      top: 20px;
    `}
`;
