import Link from 'next/link'
import styled from 'styled-components'

export default function ReactQueryTest() {
  return (
    <Wrapper>
      <div>
        <button>
          <Link href='/testPages/ssg'>SSG Test</Link>
        </button>
      </div>
      <div>
        <button>
          <Link href='/testPages/ssr'>SSR Test</Link>
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
