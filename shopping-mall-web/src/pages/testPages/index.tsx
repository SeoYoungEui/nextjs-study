import Link from 'next/link'
import { styled } from 'styled-components'

export default function TestPage() {
  return (
    <Wrapper>
      <div>
        <button>
          <Link href='/testPages/input-test'>Input Test</Link>
        </button>
      </div>
      <div>
        <button>
          <Link href='/testPages/form-test'>React Hook Form Test</Link>
        </button>
      </div>
      <div>
        <button>
          <Link href='/testPages/react-query-test'>React Query Test</Link>
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 40px;
  button {
    font-size: 50px;
  }
`
