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
			title: '账号',
			dataIndex: 'account',
		},
		{
			title: '邮箱',
			dataIndex: 'email',
		},
		{
			title: '状态',
			dataIndex: 'status',
		},
		{
			title: '创建时间',
			dataIndex: 'createTime',
		},
		{
			title: '操作',
			dataIndex: 'operation',
			align: 'center',
			fixed: 'right',
			render: () => (
				<Space>
					<a onClick={handleDetail}>详情</a>
					<a >禁用</a>
				</Space>
			),
		},
	];
	const Tabledata = Array(10).fill({
		key: '1',
		account: 'zhangyi',
		email: '838383883838@qq.com',
		createTime: '2022-09-08 08:35:26',
		status: '启用',
	});

	const handleApply = ()=> {
		utils.confirm({
			title: '课程申请',
			content: '确定要申请该课程吗'
		});
	};

	const handleDetail = ()=> {
		setDetailModalStatus(true);
	};

	return (
		<div>
			<Row>
				<Col span={24} style={{ textAlign: 'right' }}>
					<Button type="primary">添加账号</Button>
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
				confirmText="确定"
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
