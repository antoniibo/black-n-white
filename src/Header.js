import logo from './images/logoMain.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCircleUser,faMagnifyingGlass,faCartShopping } from '@fortawesome/free-solid-svg-icons'
function Header(){
    return (
        <header>
        <div className='header-wrapper'>
          <img src={logo} className="header-logo" alt="logo" />
          <nav>
            <details className='dropdown'>
              <summary>Products</summary>
              <ul className='dropdown-list'>
                <li><a href='#'>Men's</a></li>
                <li><a href='#'>Women's</a></li>
                <li><a href='#'>Accessories</a></li>
                <li><a href='#'>On sale</a></li>
              </ul>
            </details>
            <details className='dropdown'>
              <summary>About Us</summary>
              <ul className='dropdown-list'>
                <li><a href='#'>Our History</a></li>
                <li><a href='#'>Brand Idea</a></li>
                <li><a href='#'>Why Us?</a></li>
                <li><a href='#'>Contact Us</a></li>
              </ul>
            </details>
            <details className='dropdown'>
              <summary>House rules</summary>
              <ul className='dropdown-list'>
                <li><a href='#'>Delivery & Return</a></li>
                <li><a href='#'>Payment policy</a></li>
                <li><a href='#'>Cooperation</a></li>
              </ul>
            </details>
          </nav>
          <div className='leftSide'>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <details>
              <summary><FontAwesomeIcon icon={faCaretRight} /> En</summary>
              <ul className='dropdown-list'>
                <li><a>En</a></li>
                <li><a>Uk</a></li>
              </ul>
            </details>
            <a href='#' target='_blank'><FontAwesomeIcon icon={faCartShopping} /></a>
            <details className='customer-dropdown'>
              <summary><FontAwesomeIcon icon={faCircleUser} /></summary>
              <ul className='dropdown-list'>
                <li><a href='#'>My account</a></li>
                <li><a href='#'>Wishes</a></li>
                <li><a href='#'>Orders history</a></li>
              </ul>
            </details>
          </div>
        </div>
      </header>
    )
}
export default Header;