import { Container } from './styles';

export function Button({ children, ...rest  }) {

  return (
    <Container type="button" {...rest}>
      { children}
    </Container>
  )
}