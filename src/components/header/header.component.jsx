import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';


import { ReactComponent as Logo } from '../../assets/food-finder-logo.svg';

import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='../../pages/homepage/homepage.component'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
     
      <Link className='option' to='/'>
        CONTACT
      </Link>
     
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
  
    </div>

  </div>
);


const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);




