import './index.css'

 
export const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
    </header>
  )
}