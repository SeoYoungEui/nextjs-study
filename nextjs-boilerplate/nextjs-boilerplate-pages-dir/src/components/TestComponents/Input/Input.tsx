import { ChangeEvent, useState } from 'react'

type InputProps = JSX.IntrinsicElements['input'] & {
  label: string
}
export const Input = ({ label, ...rest }: InputProps) => {
  const [text, setText] = useState<string>('')
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const resetInputField = () => {
    setText('')
  }
  return (
    <div>
      <label htmlFor={rest.id}>{label}</label>
      <input {...rest} type='text' value={text} onChange={onInputChange} />
      <button onClick={resetInputField}>Reset</button>
    </div>
  )
}
