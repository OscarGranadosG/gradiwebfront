import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom'

const HeaderTitle = styled.header`
    background-color: #f1e208;
    color: #2c2b2b;
    padding: 18px 0;
    font-family: Comic Sans MS, Comic Sans, cursive;
`;

const HeaderOptions = styled.nav`
    background-color: #2c2b2b;
`;

const TextOptions = styled.p`
    color: #dfdede;
    text-align: center;
    padding-top:10px;
    :hover {
        color:#f1e208;
    }
`;

const Header = () => {
    return (
        <Fragment>
            <HeaderTitle>
                <div className="navbar navbar-expand-lg">
                    <div className="container">
                        <h1>PARKING GRADIWEB</h1>
                    </div>
                </div>
            </HeaderTitle>
            
            <HeaderOptions>
                <div className="navbar navbar-expand-lg"> 
                    <div className="container">

                        <Link to={'/'}>
                            <TextOptions>
                                    VER DATOS
                            </TextOptions>
                        </Link>
                        
                        <Link to={'/car/create'}>
                            <TextOptions>
                                    REGISTRAR CARRO
                            </TextOptions>
                        </Link>

                        <Link to={'/owner/create'}>
                            <TextOptions>
                                    REGISTRAR PROPIETARIO
                            </TextOptions>
                        </Link>

                        <Link to={'/brand/create'}>
                            <TextOptions>
                                    REGISTRAR MARCA
                            </TextOptions>
                        </Link>

                    </div>
                </div>
            </HeaderOptions>
            
        </Fragment>  
        
    );
}
 
export default Header;