import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import { useContext } from 'react';
import userData from './Store';

const Header = () => {

    


    // const data = useContext(userData);
    // console.log( "userData",props.state);
    // console.log( "userData",userData);


    
    return (
        <div>
            <header>
            <div className="header">
                <div className="header_updates">&emsp;
                    <MovieCreationIcon fontSize='small' />&nbsp;<br />
                    <Link to={'/'} >
                        <span className="header_update_text">Movies</span>
                    </Link>
                </div>
                <div className="episodes">&emsp;
                    <WhatshotIcon />&nbsp;<br />
                    <Link to={'Trending'}>

                        <span className='trending_text'>Trending</span>
                    </Link>
                </div>
                <div className="search">&nbsp;
                    <SearchIcon />&nbsp;<br />
                    <Link to={'Search'}>

                        <span className='search_text'>Search</span>
                    </Link>
                </div>
                <div className='login'>
                    <span>{}</span>
                <Link to={'/Login'}>
                    <span> SignIn</span>
                </Link>
                <h1>{}</h1>
                    
                </div>

            </div>
            </header>
        </div>
    );
}

export default Header;