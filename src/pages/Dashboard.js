import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {Column} from '@ant-design/plots';
import {Button, Table} from 'antd';
const Dashboard = () => {
  const columns = [
    {
      title: 'sNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const datatable = [];
  for (let i = 0; i < 46; i++) {
    datatable.push({
      key: i,
      name: `Mr. ${i}`,
      product: 32,
      status: `Dang giao ${i}`,
      address: `Da Nang,Viet Nam${i}`,
    });
  }
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 75,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },

    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 88,
    },
    {
      type: 'Oct',
      sales: 52,
    },
    {
      type: 'Nov',
      sales: 28,
    },
    {
      type: 'Dec',
      sales: 34,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({type}) => {
      return '#9b59b6';
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p> <h4 className="mb-0">$1000</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowUpRight />
              32%
            </h6>
            <p className="mb-0">Compare to April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p> <h4 className="mb-0">$1000</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowUpRight />
              12%
            </h6>
            <p className="mb-0">Compare to April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p> <h4 className="mb-0">$1000</h4>
          </div>
          <div className="d-flex flex-column align-items-end ">
            <h6 className="red">
              <BsArrowUpRight />
              23%
            </h6>
            <p className="mb-0">Compare to April 2023</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Income static</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={datatable} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
