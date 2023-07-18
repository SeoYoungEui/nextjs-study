import { Input } from '@/components/Input'
import { RenderResult, render, screen } from '@testing-library/react'

/**
 * describe 함수를 사용하여 함수를 모은다. 여기서는 Input Component 의 테스트를 진행한다.
 */
describe('Input', () => {
  let renderResult: RenderResult

  /**
   * beforeEach , afterEach 함수는 각 테스트 실행 전, 후의 처리를 기술합니다.
   */

  // 각 테스트 케이스 전에 컴포넌트를 화면에 그리고, renderResult에 설정한다.
  beforeEach(() => {
    renderResult = render(<Input id='testInput' label='Test Input' />)
  })

  // 테스트 케이스 실행 후 화면에 그려진 컴포넌트를 unmount를 호출해 릴리스 합니다.
  afterEach(() => {
    renderResult.unmount()
  })

  it('첫 화면에서 input 요소는 비워져있어야 합니다.', () => {
    // label이 Test Input 인 input 요소를 가져옵니다.
    const inputNode = screen.getByLabelText('Test Input') as HTMLInputElement

    // Input 요소의 표시가 비어있는지 확인한다.
    expect(inputNode).toHaveValue('')
  })
})
