import React, { memo, useCallback } from 'react';
import {
	Table,
	Space,
	Input,
	Form,
	Select,
	Button,
	Row,
	Col,
	Tabs,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';

const { TabPane } = Tabs;

interface ColsType {
  coursename: string;
}

const CourseApply = memo(() => {
	const renderCols = useCallback((key: string) => {
		const Tablecolumns: ColumnsType<ColsType> = [
			{
				title: '序号',
				render: (t: string, r: any, i: number) => i + 1,
			},
			{
				title: '课程名称',
				dataIndex: 'coursename',
			},
			{
				title: '开始时间',
				dataIndex: 'starttime',
			},
			{
				title: '时长',
				dataIndex: 'duration',
			},
			{
				title: '讲师',
				dataIndex: 'lecturer',
			},
			{
				title: '申请学生',
				dataIndex: 'state',
			},
			{
				title: '所属机构',
				dataIndex: 'organization',
			},
			{
				title: '课程描述',
				dataIndex: 'description',
			},
			{
				title: '申请时间',
				dataIndex: 'starttime',
			},
			{
				title: '操作',
				dataIndex: 'operation',
				align: 'center',
				fixed: 'right',
				render: () => {
					return key === '1' ? (
						<Space>
							<a>通过</a>
							<a>驳回</a>
						</Space>
					) : (
						'通过'
					);
				},
			},
		];
		return Tablecolumns;
	}, []);

	const Tabledata = [
		{
			key: '1',
			coursename: '电商运营妙招',
			starttime: '2022-06-12 14:00:00',
			duration: '120分钟',
			lecturer: '张立',
			state: '未开始',
			organization: '机构1',
			description: '从专业角度分析电商运营技巧，课…',
		},
		{
			key: '2',
			coursename: '电商运营妙招',
			starttime: '2022-06-12 14:00:00',
			duration: '120分钟',
			lecturer: '张立',
			state: '未开始',
			organization: '机构1',
			description: '从专业角度分析电商运营技巧，课…',
		},
		{
			key: '3',
			coursename: '电商运营妙招',
			starttime: '2022-06-12 14:00:00',
			duration: '120分钟',
			lecturer: '张立',
			state: '未开始',
			organization: '机构1',
			description: '从专业角度分析电商运营技巧，课…',
		},
		{
			key: '4',
			coursename: '电商运营妙招',
			starttime: '2022-06-12 14:00:00',
			duration: '120分钟',
			lecturer: '张立',
			state: '未开始',
			organization: '机构1',
			description: '从专业角度分析电商运营技巧，课…',
		},
		{
			key: '5',
			coursename: '电商运营妙招',
			starttime: '2022-06-12 14:00:00',
			duration: '120分钟',
			lecturer: '张立',
			state: '未开始',
			organization: '机构1',
			description: '从专业角度分析电商运营技巧，课…',
		},
	];
	return (
		<div id="course-apply" style={{ marginTop: '-10px' }}>
			<Tabs
				defaultActiveKey="1"
				onChange={(e) => {
					console.log(e);
				}}
			>
				<TabPane tab="未审批" key="1">
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
										placeholder="输入课程/讲师名称"
									/>
								</Form.Item>
								<Form.Item name="status">
									<Select
										style={{ width: 200 }}
										placeholder="请选择状态"
										options={[
											{
												label: '未开始',
												value: 0,
											},
											{
												label: '进行中',
												value: 1,
											},
											{
												label: '已结束',
												value: 3,
											},
										]}
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
					</Row>

					<Table
						style={{ marginTop: 12 }}
						scroll={{ x: 1000 }}
						columns={renderCols('1')}
						dataSource={Tabledata}
						size="small"
						pagination={{
							// size:'default',
							total: 500,
							defaultCurrent: 2,
							showQuickJumper: true,
						}}
					/>
				</TabPane>
				<TabPane tab="已审批" key="2">
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
										placeholder="输入课程/讲师名称"
									/>
								</Form.Item>
								<Form.Item name="status">
									<Select
										style={{ width: 200 }}
										placeholder="请选择状态"
										options={[
											{
												label: '未开始',
												value: 0,
											},
											{
												label: '进行中',
												value: 1,
											},
											{
												label: '已结束',
												value: 3,
											},
										]}
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
					</Row>

					<Table
						style={{ marginTop: 12 }}
						scroll={{ x: 1000 }}
						columns={renderCols('2')}
						dataSource={Tabledata}
						size="small"
						pagination={{
							// size:'default',
							total: 500,
							defaultCurrent: 2,
							showQuickJumper: true,
						}}
					/>
				</TabPane>
			</Tabs>
		</div>
	);
});

export default CourseApply;
