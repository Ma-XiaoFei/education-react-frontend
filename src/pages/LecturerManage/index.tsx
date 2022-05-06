import React, { memo } from 'react';
import { Table, Space, Input, Form, Select, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';

interface ColsType {
  coursename: string;
}

const lecturerManage = memo(() => {
	const Tablecolumns: ColumnsType<ColsType> = [
		{
			title: 'Serial number',
			render: (t: string, r: any, i: number) => i + 1,
		},
		{
			title: 'Lecturer name',
			dataIndex: 'coursename',
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
		},
		{
			title: 'Mailbox',
			dataIndex: 'duration',
		},
		{
			title: 'Class schedule',
			dataIndex: 'step',
		},
		{
			title: 'Add time',
			dataIndex: 'starttime',
		},
		{
			title: 'Operation',
			dataIndex: 'operation',
			width:'240px',
			align: 'center',
			fixed: 'right',
			render: () => (
				<Space>
					<a>Details</a>
					<a>Reset Password</a>
					<a>Delete</a>
				</Space>
			),
		},
	];
	const Tabledata = Array(20).fill({
		key: '1',
		coursename: 'E-commerce operation tricks',
		starttime: '2022-06-12 14:00:00',
		duration: '120 minutes',
		lecturer: 'Zhang Li',
		step: '1/10',
		gender:'Male',
		organization: 'Institution 1',
		description: 'Analysis of e-commerce operation skills from a professional perspective, class...',
	});
	return (
		<div>
			<Row>
				<Col span={20}>
					<Form
						// form={form}
						// name="horizontal_login"
						layout="inline"
						onFinish={(data) => {
							console.log(data);
						}}
					>
						<Form.Item name="username">
							<Input
								suffix={<SearchOutlined />}
								placeholder="Enter the name of the instructor"
							/>
						</Form.Item>
						<Form.Item>
							<Space>
								<Button type="primary">Inquiry</Button>
								<Button>Reset</Button>
							</Space>
						</Form.Item>
					</Form>
				</Col>
				<Col span={4} style={{ textAlign: 'right' }}>
					<Button type="primary">Add Instructor</Button>
				</Col>
			</Row>

			<Table
				style={{ marginTop: 12 }}
				scroll={{ x: 1000,y: 500 }}
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
		</div>
	);
});

export default lecturerManage;
