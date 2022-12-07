import React from 'react';

function Footer() {
    return (
        <footer>
            <p>Cpoyright &#169; {year}</p>
        </footer>
    );
}

export default Footer;

var year = new Date().getFullYear();