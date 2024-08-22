import styled from 'styled-components';

const CustomButton = styled.button`
  display: flex;
  cursor: pointer;
  flex-direction:  ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};

  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  padding:  ${props => props.padding || '0.5rem'};

  border-radius:  ${props => props.borderRadius || 'auto'};
  border: ${props => props.border || 'none'};
  gap: ${props => props.gap || '1rem'};

  background-color:  ${props => props.backgroundColor || '#AFAFAF'};
  color:  ${props => props.props.color || 'black'};

  &:hover {
    background-color: ${props => props.hoverBackgroundColor || props.backgroundColor || '#AFAFAF'};
    color: ${props => props.hoverColor || props.color || 'black'};
  }
`;

export default CustomButton;