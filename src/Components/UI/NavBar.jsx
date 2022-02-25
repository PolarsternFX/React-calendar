
import React from 'react';

const NavBar = () => {
    return (
        <div className='navbar navbar-dark bg-dark mb-4'>

            <span className = "navbar-brand m-2"> 
                NavBar Screen 
            </span>

            <button className = "btn btn-primary m-3">
                <span className = "m-3"> Sign Out </span>
                <i class="fas fa-sign-out-alt"></i>           
            </button>

        </div>
    )
};

export default NavBar;