import React ,{useState} from 'react';
import '../../App.css'
import Headerdas from './headerdas';
import Slidebardas from './Slidebardas';
import Homedas from './Homedas';

function Dasboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
            <Headerdas OpenSidebar={OpenSidebar} />
            <Slidebardas openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Homedas />
        </div>
    )
    
}

export default Dasboard;
