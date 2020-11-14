import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

const Form = styled.form`
  width: 94%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* @media ${device.tablet} {
    width: 72%;
  } */
`;

const FormButton = styled.button`
  background-image: url('/public/images/icons/icon-black-magnifyer.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 10px;
  top: 5px;
  border: none;
  background-color: transparent;
`;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Search song, artist, album...',
})`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  text-indent: 10px;
`;

export { Input, Form, FormButton };
