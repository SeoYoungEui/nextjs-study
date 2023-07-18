import { Input } from '@/components/Input'
import { RenderResult, fireEvent, render, screen } from '@testing-library/react'

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

  it('문자 입력 후 내용이 표시되는지 테스트', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Test Input') as HTMLInputElement

    //fireEvent 를 사용해 input 요소의 onChange 이벤트를 트리거합니다.
    fireEvent.change(inputNode, { target: { value: inputText } })

    // input 요소에 입력한 텍스트가 표시되는지 확인한다.
    expect(inputNode).toHaveValue(inputText)
  })

  it('reset 버튼이 클릭되면 입력 텍스트가 초기화되는지 테스트', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Test Input') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })

    // 버튼을 받아온다
    const buttonNode = screen.getByRole('button', {
      name: 'Reset',
    }) as HTMLButtonElement

    // 버튼 Click
    fireEvent.click(buttonNode)

    //input요소가 Reset 됫는지 확인한다.
    expect(inputNode).toHaveValue('')
  })
})
