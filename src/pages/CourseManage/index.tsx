import React, { memo, useState } from 'react';
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
import CourseApply from './CourseApply';
import './index.less';
import Modal from '@/component/Modal';

const { TabPane } = Tabs;

interface ColsType {
  coursename: string;
}

const CourseManage = memo(() => {
	const [ form ] = Form.useForm();
	const [ detailModalStatus, setDetailModalStatus ] = useState(false);
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
			title: 'Status',
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
			title: 'Operation',
			dataIndex: 'operation',
			align: 'center',
			fixed: 'right',
			width: '220px',
			render: () => (
				<Space>
					<a onClick={handleDetail}>Details</a>
					<a>Rating</a>
					<a>Assignments</a>
				</Space>
			),
		},
	];
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
	const handleDetail = ()=> {
		setDetailModalStatus(true);
	};

	return (
		<div style={{ marginTop: '-10px' }}>
			<Tabs
				defaultActiveKey="1"
				onChange={(e) => {
					console.log(e);
				}}
			>
				<TabPane tab="Course Management" key="1">
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
						<Col span={4} style={{ textAlign: 'right' }}>
							<Button type="primary">Add a course</Button>
						</Col>
					</Row>

					<Table
						style={{ marginTop: 12 }}
						scroll={{ x: 1000 }}
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
				</TabPane>
				<TabPane tab="Course Application" key="2">
					<CourseApply/>
				</TabPane>
			</Tabs>
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

export default CourseManage;
