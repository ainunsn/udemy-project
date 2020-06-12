import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {ReactComponent as Logo} from './crown.svg';
import './header.styles.scss';

// const Logo = require('./crown.svg')
const Header = ({currentUser, hidden}) => {
	return(
		<div className='header'>
			<Link to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>
				{
					currentUser ?
					<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
					:
					<Link className='option' to='/signin'>SIGNIN</Link>
				}
				<CartIcon />
			</div>
			{
				hidden ? null : <CartDropdown />
			}
		</div>
	)
}
const mapStateToProps =  createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);