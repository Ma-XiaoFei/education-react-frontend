import React, { memo, useCallback, useState } from 'react';
import {
	Table,
	Space,
	Input,
	Form,
	Select,
	Button,
	Row,
	Col,
	Radio,
	Timeline,
	Upload,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import Modal from '@/component/Modal';
import CourseCalendar from './CourseCalendar';
import './index.less';

interface ColsType {
  coursename: string;
}

const MyCourse = memo(() => {
	const [ detailModalStatus, setDetailModalStatus ] = useState(false);
	const [ rateModalStatus, setRateModalStatus ] = useState(false);
	const [ assignmentsModalStatus, setAssignmentsModalStatus ] = useState(false);
	const [ calendarModalStatus, setCalendarModalStatus ] = useState(false);
	const [ form ] = Form.useForm();
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
					<a onClick={() => setRateModalStatus(true)}>Rating</a>
					<a onClick={() => setAssignmentsModalStatus(true)}>Assignments</a>
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
			description:
        'Analysis of e-commerce operation skills from a professional perspective, class...',
		},
		{
			key: '2',
			coursename: 'E-commerce operation tricks',
			starttime: '2022-06-12 14:00:00',
			duration: '120 minutes',
			lecturer: 'Zhang Li',
			state: 'Not started',
			organization: 'Institution 1',
			description:
        'Analysis of e-commerce operation skills from a professional perspective, class...',
		},
		{
			key: '3',
			coursename: 'E-commerce operation tricks',
			starttime: '2022-06-12 14:00:00',
			duration: '120 minutes',
			lecturer: 'Zhang Li',
			state: 'Not started',
			organization: 'Institution 1',
			description:
        'Analysis of e-commerce operation skills from a professional perspective, class...',
		},
		{
			key: '4',
			coursename: 'E-commerce operation tricks',
			starttime: '2022-06-12 14:00:00',
			duration: '120 minutes',
			lecturer: 'Zhang Li',
			state: 'Not started',
			organization: 'Institution 1',
			description:
        'Analysis of e-commerce operation skills from a professional perspective, class...',
		},
		{
			key: '5',
			coursename: 'E-commerce operation tricks',
			starttime: '2022-06-12 14:00:00',
			duration: '120 minutes',
			lecturer: 'Zhang Li',
			state: 'Not started',
			organization: 'Institution 1',
			description:
        'Analysis of e-commerce operation skills from a professional perspective, class...',
		},
	];

	const handleDetail = () => {
		setDetailModalStatus(true);
	};

	const handleAlert = () => {
		setCalendarModalStatus(true);
	};

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
					<Button type="primary" onClick={handleAlert}>Course Calendar</Button>
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
					total: Tabledata.length,
					defaultCurrent: 2,
					showQuickJumper: true,
				}}
			/>
			<Modal
				title="Course detail"
				visible={detailModalStatus}
				confirmText="Determine"
				confirmCallback={() => {
					setDetailModalStatus(false);
				}}
				cancelCallback={() => {
					setDetailModalStatus(false);
				}}
			>
				<Form
					wrapperCol={{ span: 12 }}
					labelCol={{ span: 10 }}
					form={form}
					onFinish={() => {}}
				>
					<Form.Item name="Course Name" label="Course Name">
            E-Commerce Operations
					</Form.Item>
					<Form.Item name="Pre-course" label="Pre-course">
            E-Commerce Operations
					</Form.Item>
					<Form.Item name="starttime" label="Start Time">
            2022-01-01 12:00:00
					</Form.Item>
					<Form.Item name="starttime" label="Lecturer">
            Lecturer
					</Form.Item>
					<Form.Item name="starttime" label="Status">
            Closed
					</Form.Item>
					<Form.Item name="starttime" label="Attendance or not">
            是
					</Form.Item>
					<Form.Item name="Course Description" label="Course Description">
            This course can help you quickly understand e-commerce operation
            skills This course can help you quickly understand e-commerce
            operation skills This course can help you quickly understand
            e-commerce operation skills This course can help you quickly
            understand e-commerce operation skills This course can help you
            quickly understand e-commerce operation skills
					</Form.Item>
				</Form>
			</Modal>
			{/* 评分 */}
			<Modal
				title="Rating"
				visible={rateModalStatus}
				confirmText="Determine"
				confirmCallback={() => {
					setRateModalStatus(false);
				}}
				cancelCallback={() => {
					setRateModalStatus(false);
				}}
			>
				<Form
					className="rate-form"
					layout="vertical"
					form={form}
					onFinish={() => {}}
				>
					<Form.Item name="Course Name" label="Please rate the course">
						<Radio.Group>
							<Radio value={1}>1score</Radio>
							<Radio value={2}>2score</Radio>
							<Radio value={3}>3score</Radio>
							<Radio value={4}>4score</Radio>
							<Radio value={5}>5score</Radio>
						</Radio.Group>
					</Form.Item>
				</Form>
			</Modal>

			{/* 作业 */}
			<Modal
				title="Assignments"
				visible={assignmentsModalStatus}
				confirmText="Determine"
				confirmCallback={() => {
					setAssignmentsModalStatus(false);
				}}
				cancelCallback={() => {
					setAssignmentsModalStatus(false);
				}}
			>
				<Timeline className="assign-timeline">
					<Timeline.Item>2022-09-01 12:00:00</Timeline.Item>
					<Timeline.Item>
						<p>Working Papers <a>xxx.pdf</a></p>
						<p>score: 100</p>
						<p>Description: <span style={{ color: '#757575' }}>xxxxxxxxxxxx</span></p>
					</Timeline.Item>
					<Timeline.Item>
						<Upload>
							<Button type='primary'>选择文件</Button> <span style={{ color: '#B9B9B9' }}>(Support word/pdf/png,No more than 10M)</span>
						</Upload>
					</Timeline.Item>
				</Timeline>
			</Modal>
			<CourseCalendar
				calendarModalStatus={calendarModalStatus}
				setCalendarModalStatus={(flag: boolean)=> {
					setCalendarModalStatus(flag);
				}}/>
		</div>
	);
});

export default MyCourse;
