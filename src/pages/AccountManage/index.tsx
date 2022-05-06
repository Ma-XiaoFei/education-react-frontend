import React, { memo, useState } from 'react';
import { Table, Space, Input, Form, Select, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import Modal from '@/component/Modal';
import utils from '@/utils';

interface ColsType {
  coursename: string;
}

const MyCourse = memo(() => {
	const [ form ] = Form.useForm();
	const [ detailModalStatus, setDetailModalStatus ] = useState(false);
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
			render: () => (
				<Space>
					<a onClick={handleDetail}>Details</a>
					<a >Disable</a>
				</Space>
			),
		},
	];
	const Tabledata = Array(10).fill({
		key: '1',
		account: 'zhangyi',
		email: '838383883838@qq.com',
		createTime: '2022-09-08 08:35:26',
		status: 'Enable',
	});

	const handleApply = ()=> {
		utils.confirm({
			title: 'Course Application',
			content: 'Are you sure you want to apply for this course?'
		});
	};

	const handleDetail = ()=> {
		setDetailModalStatus(true);
	};

	return (
		<div>
			<Row>
				<Col span={24} style={{ textAlign: 'right' }}>
					<Button type="primary">Add account</Button>
				</Col>
			</Row>
			<Table
				style={{ marginTop: 12 }}
				scroll={{ y: 500 }}
				columns={Tablecolumns}
				dataSource={Tabledata}
				size="small"
				pagination={{
					// size:'default',
					total: 500,
					defaultCurrent: 2,
					showQuickJumper: true,
				}}
			/>

			<Modal
				title='Course detail'
				visible={detailModalStatus}
				confirmText="Determine"
				confirmCallback={()=> {
					setDetailModalStatus(false);
				}}
				cancelCallback={()=> {
					setDetailModalStatus(false);
				}}>
				<Form
					wrapperCol={{ span: 12 }}
					labelCol={{ span: 12 }}
					form={form}
					onFinish={()=> {

					}}
				>
					<Form.Item
						name='Course Name'
						label='Course Name'
					>
						sss
					</Form.Item>
					<Form.Item
						name='Course Name'
						label='Course Name'
					>
						sss
					</Form.Item>
					<Form.Item
						name='Course Name'
						label='Course Name'
					>
						sss
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
});

export default MyCourse;
