
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// //import Nav from '../Nav';

// export default function CenteredTabs() {
// const [value, setValue] = React.useState(0);

// const handleChange = (event, newValue) => {
//     setValue(newValue);
// };

// return (
//     <Box className='headerComponent' sx={{ bgcolor: 'background.paper' }}>
//     <Tabs value={value} onChange={handleChange} >
//         <Tab label="About Me" />
//         <Tab label="Portfolio" />
//         <Tab label="Contact" />
//         <Tab label="Resume" />
//     </Tabs>
//     </Box>
// );
// }


import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <nav>
            <li className="flex-row navStyle">
                {pages.map((Page) => (
                    <li
                        className={`mx-5 liStyle ${currentPage.name === Page.name && 'navActive'
                            }`}
                        key={Page.name}

                        onClick={() => setCurrentPage(Page)}
                    >
                        
                            
                        
                            {capitalizeFirstLetter(Page.name)}
                        
                    </li>
                ))}
            </li>
        </nav>
    );
}

export default Nav;
