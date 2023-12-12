/* eslint-disable react/prop-types */
const Header = (props) => {
  
  const { page, section } = props
  console.log(props)
  return (
    <div className="justify">
      <h1> {page} </h1>
      <h6> {section} </h6>
    </div>
  )
}

export default Header