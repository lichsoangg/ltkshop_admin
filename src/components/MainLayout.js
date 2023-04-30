import React from 'react';
import {useState} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {MdDashboard} from 'react-icons/md';
import {BsFillCartPlusFill, BsClipboard2PlusFill} from 'react-icons/bs';
import {AiOutlineUser, AiOutlineQuestionCircle} from 'react-icons/ai';
import {TbBrandAdonisJs, TbBrandAo3, TbCategory2} from 'react-icons/tb';
import {IoIosListBox, IoIosNotificationsOutline} from 'react-icons/io';
import {MdNotifications} from 'react-icons/md';

import {FaMicroblog} from 'react-icons/fa';
import {Layout, Menu, Button, theme} from 'antd';
import {Link, Outlet, useNavigate} from 'react-router-dom';

const {Header, Sider, Content} = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3">LTK Shop</h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key}) => {
            if (key == 'signout') {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <MdDashboard />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className="fs-4" />,
              label: 'Customer',
            },
            {
              key: 'Catalog',
              icon: <MdDashboard className="fs-4" />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <BsFillCartPlusFill className="fs-4" />,
                  label: 'Add product',
                },
                {
                  key: 'product-list',
                  icon: <BsFillCartPlusFill className="fs-4" />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <TbBrandAdonisJs className="fs-4" />,
                  label: 'Brand',
                },
                {
                  key: 'brand-list',
                  icon: <TbBrandAo3 className="fs-4" />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <TbCategory2 className="fs-4" />,
                  label: 'Category',
                },
                {
                  key: 'category-list',
                  icon: <TbCategory2 className="fs-4" />,
                  label: 'Category List',
                },
              ],
            },
            {
              key: 'order',
              icon: <BsClipboard2PlusFill className="fs-4" />,
              label: 'Order',
            },
            {
              key: 'blog',
              icon: <FaMicroblog className="fs-4" />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon: <BsClipboard2PlusFill className="fs-4" />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <IoIosListBox className="fs-4" />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <BsClipboard2PlusFill className="fs-4" />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <IoIosListBox className="fs-4" />,
                  label: 'Blog Category List',
                },
              ],
            },
            {
              key: 'enquiries',
              icon: <AiOutlineQuestionCircle className="fs-4" />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{padding: '10px'}} className="d-flex justify-content-between ps-1 pe-5">
          <Button
            className="text-white"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center">
            <div className="position-relative">
              <MdNotifications style={{color: 'white', cursor: 'pointer'}} className="fs-4" />
              <span className="badge bg-warning rounded-circle position-absolute">3</span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  src="https://img.meta.com.vn/Data/image/2022/06/16/avatar-vo-dien-hinh-nen-vo-dien-25.jpg"
                  style={{width: '40px', height: '40px'}}
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="text-white mb-0">Lich</h5>
                <p className="text-white mb-0">lichsoang@gmail.com</p>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    to="/"
                    className="dropdown-item py-1 mb-1"
                    style={{height: 'auto', lineHeight: '20px'}}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="dropdown-item py-1 mb-1"
                    style={{height: 'auto', lineHeight: '20px'}}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
