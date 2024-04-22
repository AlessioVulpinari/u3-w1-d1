import "./NavBarComponent.css"

const NavBarComponent = (props) => {
  return (
    <nav>
      <div>
        <a href='./public/index.html' alt='HomePage'>
          <img src={props.src} alt={props.alt} />
        </a>

        <div>
          <ul className='list'>
            <li>Home</li>
            <li>Product</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBarComponent
