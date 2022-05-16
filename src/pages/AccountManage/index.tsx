import React, { memo, useState } from 'react';
import { Table, Space, Input, Form, Select, Button, Row, Col, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import Modal from '@/component/Modal';
import utils from '@/utils';

interface ColsType {
  coursename: string;
}

const MyCourse = memo(() => {
	const [ form ] = Form.useForm();
	const [ detailModal, setDetailModal ] = useState(false);
	const [ addAccountModal, setAddAccountModal ] = useState(false);
	const [ editRecord, setEditRecord ] = useState({});

	const Tablecolumns: ColumnsType<ColsType> = [
		{
			title: 'Account Number',
			dataIndex: 'account',
		},
		{
			title: 'Mailbox',
			dataIndex: 'email',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			render:(t)=> <> {t === 1 ? 'valid' : 'Invalid'}</>
		},
		{
			title: 'Creation time',
			dataIndex: 'createTime',
		},
		{
			title: 'Operation',
			dataIndex: 'operation',
			align: 'center',
			fixed: 'right',
			render: (t,record) => (
				<Space>
					<a onClick={handleDetail.bind(null, record)}>Details</a>
					<a onClick={handleDisable}>Disable</a>
				</Space>
			),
		},
	];
	const Tabledata = Array(10).fill({
		key: '1',
		account: 'zhangyi',
		email: '838383883838@qq.com',
		createTime: '2022-09-08 08:35:26',
		status: '1',
	});

	const handleDisable = ()=> {
		utils.confirm({
			content: 'Are you sure you want to disable the operation with due care?'
		});
	};

	const handleDetail = (record: any)=> {
		setEditRecord(record);
		setDetailModal(true);
	};

	return (
		<div>
			<Row>
				<Col
					span={24}
					style={{ textAlign: 'right' }}>
					<Button
						type="primary"
						onClick={()=> setAddAccountModal(true)}>
							Add account
					</Button>
				</Col>
			</Row>
			<Table
				style={{ marginTop: 12 }}
				scroll={{ y: 500 }}
				columns={Tablecolumns}
				dataSource={Tabledata}
				size="small"
				pagination={{
					total: 20,
					defaultCurrent: 1,
					showQuickJumper: true,
				}}
			/>
			<Modal
				title={addAccountModal ? 'Add Account': 'Account Detail'}
				visible={addAccountModal||detailModal}
				confirmText="Determine"
				confirmCallback={()=> {
					setAddAccountModal(false);
					setDetailModal(false);
					setEditRecord({});
				}}
				cancelCallback={()=> {
					setAddAccountModal(false);
					setDetailModal(false);
					setEditRecord({});
				}}>
				<Form
					wrapperCol={{ span: 9 }}
					labelCol={{ span: 9 }}
					onFinish={(data)=> {
					}}
					initialValues={editRecord}
					// form={addOrgForm}
				>
					<Form.Item
						name='account'
						label='Account Number'
					>
						<Input
							disabled={detailModal}
							placeholder="Please enter"
							maxLength={40}/>
					</Form.Item>
					<Form.Item
						name='ss'
						label='Password'
					>
						{addAccountModal ?
							(
								<Input placeholder="Please enter" maxLength={8}/>
							)
							: <a>重置Password</a>
						}
					</Form.Item>
					<Form.Item
						name='email'
						label='Mailbox'
					>
						<Input placeholder="Please enter"/>
					</Form.Item>
					<Form.Item
						name='status'
						label='Status'
					>
						<Radio.Group>
							<Radio value="1">Enable</Radio>
							<Radio value="0">Disable</Radio>
						</Radio.Group>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
});

export default MyCourse;
