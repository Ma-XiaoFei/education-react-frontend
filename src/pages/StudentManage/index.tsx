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
			title: '序号',
			render: (t: string, r: any, i: number) => i + 1,
		},
		{
			title: '讲师姓名',
			dataIndex: 'coursename',
		},
		{
			title: '性别',
			dataIndex: 'gender',
		},
		{
			title: '邮箱',
			dataIndex: 'duration',
		},
		{
			title: '授课进度',
			dataIndex: 'step',
		},
		{
			title: '添加时间',
			dataIndex: 'starttime',
		},
		{
			title: '操作',
			dataIndex: 'operation',
			width:'200px',
			align: 'center',
			fixed: 'right',
			render: () => (
				<Space>
					<a>详情</a>
					<a>重置密码</a>
					<a>删除</a>
				</Space>
			),
		},
	];
	const Tabledata = Array(20).fill({
		key: '1',
		coursename: '电商运营妙招',
		starttime: '2022-06-12 14:00:00',
		duration: '120分钟',
		lecturer: '张立',
		step: '1/10',
		gender:'男',
		organization: '机构1',
		description: '从专业角度分析电商运营技巧，课…',
	});
	return (
		<div>

			<h3>学生管理</h3>
			{/* <Row>
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
								placeholder="输入讲师姓名"
							/>
						</Form.Item>
						<Form.Item>
							<Space>
								<Button type="primary">查询</Button>
								<Button>重置</Button>
							</Space>
						</Form.Item>
					</Form>
				</Col>
				<Col span={4} style={{ textAlign: 'right' }}>
					<Button type="primary">添加讲师</Button>
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
			/> */}
		</div>
	);
});

export default lecturerManage;
