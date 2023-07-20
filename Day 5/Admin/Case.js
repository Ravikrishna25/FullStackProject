
// import React, { useState } from 'react';
// import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import Highlighter from 'react-highlight-words';

// const originData = [
//   {
//     key: '1',
//     name: 'Officer Name 1',
//     age: 32,
//     address: 'Kovaipudur',
//   },
//   {
//     key: '2',
//     name: 'Officer Name 2',
//     age: 32,
//     address: 'Kuniamuthur',
//   },
//   // Rest of the data...
// ];

// const EditableCell = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{
//             margin: 0,
//           }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`,
//             },
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children
//       )}
//     </td>
//   );
// };

// const Home = () => {
//   const [form] = Form.useForm();
//   const [data, setData] = useState(originData);

//   const [editingKey, setEditingKey] = useState('');
//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');

//   const isEditing = (record) => record.key === editingKey;

//   const edit = (record) => {
//     form.setFieldsValue({
//       name: '',
//       age: '',
//       address: '',
//       ...record,
//     });
//     setEditingKey(record.key);
//   };

//   const cancel = () => {
//     setEditingKey('');
//   };

//   const save = async (key) => {
//     try {
//       const row = await form.validateFields();
//       const newData = [...data];
//       const index = newData.findIndex((item) => key === item.key);
//       if (index > -1) {
//         const item = newData[index];
//         newData.splice(index, 1, {
//           ...item,
//           ...row,
//         });
//         setData(newData);
//         setEditingKey('');
//       }
//     } catch (errInfo) {
//       console.log('Validate Failed:', errInfo);
//     }
//   };


//   const handleDelete = (key) => {
//     const newData = data.filter((item) => item.key !== key);
//     setData(newData);
//   };

//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//       <div style={{ padding: 8 }}>
//         <Input
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{ marginBottom: 8, display: 'block' }}
//         />
//         <Typography.Text type="secondary" style={{ fontSize: 12 }}>
//           Enter a value to filter this column.
//         </Typography.Text>
//         <Button
//           type="primary"
//           onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//           size="small"
//           style={{ marginTop: 8, width: '50%' }}
//         >
//           Search
//         </Button>
//         <Button onClick={() => handleReset(clearFilters)} size="small" style={{ marginTop: 8, width: '50%' }}>
//           Reset
//         </Button>
//       </div>
//     ),
//     filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
//     onFilter: (value, record) => {
//       const dataValue = record[dataIndex] || '';
//       return dataValue.toString().toLowerCase().includes(value.toLowerCase());
//     },
//     render: (text) =>
//       searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//           searchWords={[searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ''}
//         />
//       ) : (
//         text
//       ),
//   });

//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText('');
//   };

//   const columns = [
//     {
//       title: 'name',
//       dataIndex: 'name',
//       width: '25%',
//       editable: true,
//       ...getColumnSearchProps('name'),
//     },
//     {
//       title: 'age',
//       dataIndex: 'age',
//       width: '15%',
//       editable: true,
//       ...getColumnSearchProps('age'),
//     },
//     {
//       title: 'address',
//       dataIndex: 'address',
//       width: '40%',
//       editable: true,
//       ...getColumnSearchProps('address'),
//     },
//     {
//       title: 'operation',
//       dataIndex: 'operation',
//       render: (_, record) => {
//         const editable = isEditing(record);
//         return editable ? (
//           <span>
//             <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
//               Save
//             </Typography.Link>
//             <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//               <a>Cancel</a>
//             </Popconfirm>
//           </span>
//         ) : (
//           <>
//             <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
//               Edit
//             </Typography.Link>
//             <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
//               <a style={{ marginLeft: 8 }}>Delete</a>
//             </Popconfirm>
//           </>
//         );
//       },
//     },
//   ];

//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         inputType: col.dataIndex === 'age' ? 'number' : 'text',
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//       }),
//     };
//   });

//   return (
//     <>
//         {/* <AddData addData={handleAddData} /> */}
//     <Form form={form} component={false}>
//       <Table
//         components={{
//           body: {
//             cell: EditableCell,
//           },
//         }}
//         bordered
//         dataSource={data}
//         columns={mergedColumns}
//         rowClassName="editable-row"
//         pagination={{
//           onChange: cancel,
//         }}
//         style={{ width: '1250px'}}
//       />
//     </Form>
//     </>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button, Space } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const { Title } = Typography;

const originData = [
  {
    case_no: '123',
    case_name: 'Case 1',
    case_desc: 'Description 1',
    case_date: '2023-07-14',
    case_time: '10:00 AM',
    Location: 'Location 1',
    Reporter_Name: 'Reporter 1',
    Assigned_Police: 'Police 1',
    Case_Status: 'Open',
  },
  {
    case_no: '456',
    case_name: 'Case 2',
    case_desc: 'Description 2',
    case_date: '2023-07-15',
    case_time: '02:00 PM',
    Location: 'Location 2',
    Reporter_Name: 'Reporter 2',
    Assigned_Police: 'Police 2',
    Case_Status: 'Closed',
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

const Case = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const isEditing = (record) => record.case_no === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      case_no: '',
      case_name: '',
      case_desc: '',
      case_date: '',
      case_time: '',
      Location: '',
      Reporter_Name: '',
      Assigned_Police: '',
      Case_Status: '',
      ...record,
    });
    setEditingKey(record.case_no);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.case_no);
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
    const newData = data.filter((item) => item.case_no !== key);
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
      case_no: (data.length + 1).toString(),
      case_name: '',
      case_desc: '',
      case_date: '',
      case_time: '',
      Location: '',
      Reporter_Name: '',
      Assigned_Police: '',
      Case_Status: '',
    };
    setData([...data, newData]);
    setEditingKey(newData.case_no);
  };

  const columns = [
    {
      title: 'Case No',
      dataIndex: 'case_no',
      width: '6%',
      editable: false,
    },
    {
      title: 'Case Name',
      dataIndex: 'case_name',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('case_name'),
    },
    {
      title: 'Case Description',
      dataIndex: 'case_desc',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('case_desc'),
    },
    {
      title: 'Case Date',
      dataIndex: 'case_date',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('case_date'),
    },
    {
      title: 'Case Time',
      dataIndex: 'case_time',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('case_time'),
    },
    {
      title: 'Location',
      dataIndex: 'Location',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('Location'),
    },
    {
      title: 'Reporter Name',
      dataIndex: 'Reporter_Name',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('Reporter_Name'),
    },
    {
      title: 'Assigned Police',
      dataIndex: 'Assigned_Police',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('Assigned_Police'),
    },
    {
      title: 'Case Status',
      dataIndex: 'Case_Status',
      width: '10%',
      editable: true,
      ...getColumnSearchProps('Case_Status'),
    },
    {
      title: 'Operation',
      width:"20%",
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Space>
            <Button type="primary" onClick={() => save(record.case_no)} size="small">
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
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}style={{marginRight:"20px"}}>
              Edit
            </Typography.Link>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.case_no)}>
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
        inputType: col.dataIndex === 'case_date' || col.dataIndex === 'case_time' ? 'text' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Title level={3} style={{ marginBottom: '16px' }}>
        Case Table
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
          pagination={{
            onChange: cancel,
          }}
          style={{width:"1300px"}}
        />
      </Form>
    </>
  );
};

export default Case;
