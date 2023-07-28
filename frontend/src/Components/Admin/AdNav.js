
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,Typography } from 'antd';
import { Link } from 'react-router-dom';
import "../../Navbar/Nav.css"
const { Title } = Typography;
function getItem(label, key, icon, children, type, path) {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
  };
}

const items = [
  getItem('Police Console', 'sub1', <MailOutlined />, null, 'item', '/admin/ele1'),
  getItem('Case Console', 'sub2', <AppstoreOutlined />, null, 'item', '/admin/ele2'),
  getItem('Chat Console', 'sub3', <AppstoreOutlined />, null, 'item', '/admin/ele4'),
  getItem('Feedback Console', 'sub4', <MailOutlined />, null, 'item', '/admin/ele3'),
  
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const AdNav = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const renderMenuItem = (item) => {
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={item.path}>{item.label}</Link>
      </Menu.Item>
    );
  };

  const renderSubMenu = (item) => {
    return (
      <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
        {item.children.map((child) =>
          child.type === 'item' ? (
            renderMenuItem(child)
          ) : (
            renderSubMenu(child)
          )
        )}
      </Menu.SubMenu>
    );
  };

  const renderMenuItems = (items) => {
    return items.map((item) =>
      item.type === 'item' ? (
        renderMenuItem(item)
      ) : (
        renderSubMenu(item)
      )
    );
  };

  return (
  
<Menu
  mode="inline"
  openKeys={openKeys}
  onOpenChange={onOpenChange}
  style={{
    width: 220,
    height: "713px"
  }}
  className='Nav'
  itemSpacing={50} // Increase or decrease the value as needed
>
<Link to={"/admin/home"}>
  <Title level={3} style={{ margin: '16px', color: 'white' }}>CrimeFit</Title>
  <Title level={3} style={{ margin: '16px', color: 'white' }}>Admin Console</Title>
  </Link>
  
  {items.map(item => {
    if (item.type === 'item') {
      return (
        <Menu.Item key={item.key} icon={item.icon} style={{marginBottom:"30px",fontSize:"17px",fontFamily:"Verdana"}}>
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      );
    } else if (item.type === 'submenu') {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {item.children.map(child => (
            <Menu.Item key={child.key}>
              <Link to={child.path}>{child.label}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }
    return null;
  })}
<br />
<br />
<Menu.Item key={5} icon={<MailOutlined />} style={{marginTop:"210px",fontSize:"17px",fontFamily:"Verdana"}}>
          <Link to={"/"}>{"Log Out"}</Link>
        </Menu.Item>
</Menu>

  
  );
};

export default AdNav;
