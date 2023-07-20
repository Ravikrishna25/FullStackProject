import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button, Space } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const { Title } = Typography;

const originData = [
  {
    id: 1,
    name: 'Officer Name 1',
    mobile: '1234567890',
    mail: 'officer1@example.com',
    location: 'Kovaipudur',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Officer Name 2',
    mobile: '9876543210',
    mail: 'officer2@example.com',
    location: 'Kuniamuthur',
    status: 'Inactive',
  },
  // Rest of the data...
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Police = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      id: '',
      name: '',
      mobile: '',
      mail: '',
      location: '',
      status: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.id !== key);
    setData(newData);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Enter a value to filter this column.
        </Typography.Text>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          size="small"
          style={{ marginTop: 8, width: '50%' }}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ marginTop: 8, width: '50%' }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => {
      const dataValue = record[dataIndex] || '';
      return dataValue.toString().toLowerCase().includes(value.toLowerCase());
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const handleAddData = () => {
    const newData = {
      id: (data.length + 1),
      name: '',
      mobile: '',
      mail: '',
      location: '',
      status: '',
    };
    setData([...data, newData]);
    setEditingKey(newData.id);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: '10%',
      editable: false,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: '20%',
      editable: true,
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('mobile'),
    },
    {
      title: 'Email',
      dataIndex: 'mail',
      width: '25%',
      editable: true,
      ...getColumnSearchProps('mail'),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('location'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('status'),
    },
    {
      title: 'Operation',
      width:"20%",
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Space>
            <Button type="primary" onClick={() => save(record.id)} size="small">
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button type="default" size="small">
                Cancel
              </Button>
            </Popconfirm>
          </Space>
        ) : (
          <Space>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)} style={{marginRight:"20px"}}>
              Edit
            </Typography.Link>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
              <Typography.Link>Delete</Typography.Link>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Title level={3} style={{ marginBottom: '16px' }}>
        Officer Table
      </Title>
      <Button
        type="primary"
        onClick={handleAddData}
        icon={<PlusOutlined />}
        style={{ marginBottom: '16px' }}
      >
        Add Row
      </Button>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={false}
          style={{width:"1300px"}}
        />
      </Form>
    </>
  );
};

export default Police;
