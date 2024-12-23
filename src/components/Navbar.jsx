// Updated Navbar with Dropdowns and Animations
import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      label: 'Home',
      key: 'home',
      dropdown: (
        <Menu>
          <Menu.Item key="home-1">Submenu 1</Menu.Item>
          <Menu.Item key="home-2">Submenu 2</Menu.Item>
        </Menu>
      ),
    },
    {
      label: 'Services',
      key: 'services',
      dropdown: (
        <Menu>
          <Menu.Item key="services-1">Consulting</Menu.Item>
          <Menu.Item key="services-2">Development</Menu.Item>
        </Menu>
      ),
    },
    {
      label: 'Industries',
      key: 'industries',
      dropdown: (
        <Menu>
          <Menu.Item key="industries-1">Healthcare</Menu.Item>
          <Menu.Item key="industries-2">Finance</Menu.Item>
        </Menu>
      ),
    },
    {
      label: 'Clients',
      key: 'clients',
      dropdown: (
        <Menu>
          <Menu.Item key="clients-1">Client A</Menu.Item>
          <Menu.Item key="clients-2">Client B</Menu.Item>
        </Menu>
      ),
    },
    {
      label: 'Contact Us',
      key: 'contact',
      dropdown: (
        <Menu>
          <Menu.Item key="contact-1">Email</Menu.Item>
          <Menu.Item key="contact-2">Phone</Menu.Item>
        </Menu>
      ),
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-xl font-bold text-green-600 flex items-center">
          <span className="bg-green-600 text-white px-2 py-1 mr-2">a</span> amura
        </div>
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Dropdown
              key={item.key}
              overlay={item.dropdown}
              trigger={["hover"]}
              onVisibleChange={(visible) => setActiveMenu(visible ? item.key : null)}
            >
              <Button
                type="text"
                className={`hover:text-green-600 transition-all duration-300 ${
                  activeMenu === item.key ? "text-green-600" : "text-gray-800"
                }`}
              >
                {item.label} <DownOutlined />
              </Button>
            </Dropdown>
          ))}
        </div>
        <div className="flex space-x-4 items-center">
          <Button type="primary" className="bg-green-600 hover:bg-green-500 border-none">
            Enquire Now
          </Button>
          <div className="w-8 h-8 flex justify-center items-center border rounded-full border-gray-400">
            <span className="text-gray-800">&#x25A6;</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
