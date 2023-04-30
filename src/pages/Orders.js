import React from 'react';
import {Table} from 'antd';

const Orders = () => {
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

  return (
    <div>
      <h3 className="mb-4">Orders</h3>
      <div>
        <Table columns={columns} dataSource={datatable} />
      </div>
    </div>
  );
};

export default Orders;
