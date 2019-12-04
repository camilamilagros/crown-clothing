import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer } from './header.styles';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionContainer to='/shop'>
                SHOP
            </OptionContainer>
            <OptionContainer to='/contact'>
                CONTACT
            </OptionContainer>
            {
                currentUser ?
                <OptionContainer as={'div'} onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionContainer>
                :
                <OptionContainer to='/signin'>
                    SIGN IN
                </OptionContainer>
            }

            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);