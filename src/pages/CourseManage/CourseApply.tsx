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
				title: 'Serial number',
				render: (t: string, r: any, i: number) => i + 1,
			},
			{
				title: 'Course Name',
				dataIndex: 'coursename',
			},
			{
				title: 'Start time',
				dataIndex: 'starttime',
			},
			{
				title: 'Duration',
				dataIndex: 'duration',
			},
			{
				title: 'Lecturer',
				dataIndex: 'lecturer',
			},
			{
				title: 'Apply to Student',
				dataIndex: 'state',
			},
			{
				title: 'Affiliation',
				dataIndex: 'organization',
			},
			{
				title: 'Course Description',
				dataIndex: 'description',
			},
			{
				title: 'Application Time',
				dataIndex: 'starttime',
			},
			{
				title: 'Operation',
				dataIndex: 'operation',
				align: 'center',
				fixed: 'right',
				render: () => {
					return key === '1' ? (
						<Space>
							<a>By</a>
							<a>Rejected</a>
						</Space>
					) : (
						'By'
					);
				},
			},
		];
		return Tablecolumns;
	}, []);

	const Tabledata = [
		{
			key: '1',
			coursename: 'E-commerce operation tricks',
			starttime: '2022-06-12 14:00:00',
			duration: '120 minutes',
			lecturer: 'Zhang Li',
			state: 'Not started',
			organization: 'Institution 1',
			description: 'Analysis of e-commerce operation skills from a professional perspective, class...',
		},
		{
			key: '2',
			coursename: 'E-commerce operation tricks',
			starttime: '2022-06-12 14:00:00',
			duration: '120 minutes',
			lecturer: 'Zhang Li',
			state: 'Not started',
			organization: 'Institution 1',
			description: 'Analysis of e-commerce operation skills from a professional perspective, class...',
		},
		{
			key: '3',
			coursename: 'E-commerce operation tricks',
			starttime: '2022-06-12 14:00:00',
			duration: '120 minutes',
			lecturer: 'Zhang Li',
			state: 'Not started',
			organization: 'Institution 1',
			description: 'Analysis of e-commerce operation skills from a professional perspective, class...',
		},
		{
			key: '4',
			coursename: 'E-commerce operation tricks',
			starttime: '2022-06-12 14:00:00',
			duration: '120 minutes',
			lecturer: 'Zhang Li',
			state: 'Not started',
			organization: 'Institution 1',
			description: 'Analysis of e-commerce operation skills from a professional perspective, class...',
		},
		{
			key: '5',
			coursename: 'E-commerce operation tricks',
			starttime: '2022-06-12 14:00:00',
			duration: '120 minutes',
			lecturer: 'Zhang Li',
			state: 'Not started',
			organization: 'Institution 1',
			description: 'Analysis of e-commerce operation skills from a professional perspective, class...',
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
				<TabPane tab="Not approved" key="1">
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
										placeholder="Enter the course/instructor name"
									/>
								</Form.Item>
								<Form.Item name="status">
									<Select
										style={{ width: 200 }}
										placeholder="Please select the status"
										options={[
											{
												label: 'Not started',
												value: 0,
											},
											{
												label: 'In progress',
												value: 1,
											},
											{
												label: 'Closed',
												value: 3,
											},
										]}
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
				<TabPane tab="Approved" key="2">
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
										placeholder="Enter the course/instructor name"
									/>
								</Form.Item>
								<Form.Item name="status">
									<Select
										style={{ width: 200 }}
										placeholder="Please select the status"
										options={[
											{
												label: 'Not started',
												value: 0,
											},
											{
												label: 'In progress',
												value: 1,
											},
											{
												label: 'Closed',
												value: 3,
											},
										]}
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
