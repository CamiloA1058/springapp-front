
export const Input = ({name, type, value, handleOnChange}) => {

  return (
    <input name={name} type={type} value={value} onChange={handleOnChange}/>
  )
}
