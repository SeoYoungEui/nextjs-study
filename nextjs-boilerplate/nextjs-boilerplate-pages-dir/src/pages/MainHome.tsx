import Link from 'next/link'
import { styled } from 'styled-components'
const MainHome = () => {
  return (
    <Wrapper>
      <button>
        <Link href='/testPages'>Test</Link>
      </button>
    </Wrapper>
  )
}
export default MainHome

const Wrapper = styled.div`
  padding: 40px;
  button {
    font-size: 50px;
  }
`
