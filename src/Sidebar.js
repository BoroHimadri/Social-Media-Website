import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import { useStateValue } from './StateProvider';
import Link from '@material-ui/core/Link';
function Sidebar() {
  const user = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow
        src= {user.photoURL}
        title={user.displayName}
      />
      <Link  
        href='https://www.cowin.gov.in/'
      >     
      
     <SidebarRow
        Icon={InfoTwoToneIcon}
       title = "COVID-19 Information Center"
    />
      </Link>
     
      <SidebarRow Icon={FlagTwoToneIcon} title="Pages" />
      <SidebarRow Icon={GroupTwoToneIcon} title="Friends" />
        </div>
    );
}

export default Sidebar;
