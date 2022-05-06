import React, { memo, useCallback, useState } from 'react';
import { Table, Space, Input, Form, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import Modal from '@/component/Modal';
import StudentsModal from '@/pages/LecturerMyCourse/StudentsModal';

interface ColsType {
	coursename: string
}

const data = Array(20).fill({
	name: 'lucy',
	email: '11111@aa.com',
	institution: '111'
});

const MyCourse = memo(() => {
	const [ detailModalStatus, setDetailModalStatus ] = useState(false);
	const [ studentDetail, setStudentDetail ] = useState(false);
	const [ studentData,setStudentData ] = useState([ ...data ]);
	const Tablecolumns: ColumnsType<ColsType> = [
		{
			width: '120px',
			title: 'Serial number',
			render:(t: string,r: any,i: number)=> i+1
		},
		{
			width: '200px',
			title: 'Course Name',
			dataIndex: 'coursename',
		},
		{
			title: 'Start time',
			width: '200px',
			dataIndex: 'starttime',
		},
		{
			title: 'Duration',
			width: '120px',
			dataIndex: 'duration',
		},
		{
			title: 'Participating Students',
			width: '150px',
			dataIndex: 'studentsN',
			render(text: string){
				return (
					<a onClick={showStudentDetail}>{text}</a>
				);
			}
		},
		{
			title: 'Attendance rate',
			width: '200px',
			dataIndex: 'state',
		},
		{
			title: 'Assignment completion rate',
			width: '200px',
			dataIndex: 'organization',
		},
		{
			title: 'Course Description',
			width: '200px',
			dataIndex: 'description',
		},
		{
			title: 'Operation',
			dataIndex: 'operation',
			align:'center',
			fixed: 'right',
			width: '300px',
			render: () => (
				<Space>
					<a onClick={handleDetail}>Details</a>
					<a>Sign in</a>
					<a>Assigning homework </a>
					{/* <a>Job Management</a> */}
				</Space>
			),
		},
	];
	const Tabledata = Array(20).fill({
		key: '1',
		studentsN:12,
		coursename: 'E-commerce operation tricks',
		starttime: '2022-06-12 14:00:00',
		duration: '120 minutes',
		lecturer: 'Zhang Li',
		state: 'Not started',
		organization: 'Institution 1',
		description: 'Analysis of e-commerce operation skills from a professional perspective, class...',
	});

	const handleDetail = ()=> {
		setDetailModalStatus(true);
	};

	const showStudentDetail = ()=> {
		setStudentDetail(true);
	};

	return (
		<div>
			<Form
				// form={form}
				layout="inline"
				onFinish={(data) => {
					console.log(data);
				}}
			>
				<Form.Item name="username">
					<Input suffix={<SearchOutlined />} placeholder="Enter the course/instructor name" />
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
			<Table
				style={{ marginTop: 12 }}
				scroll={{ x: 1000 }}
				columns={Tablecolumns}
				dataSource={Tabledata}
				size="small"
				pagination={{
					// size:'default',
					total: Tabledata.length,
					defaultCurrent: 1,
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
					<Form.Item name="starttime" label="Course Description">
						33 Minutes
					</Form.Item>
					<Form.Item name="starttime" label="Participating Students">
						<a onClick={showStudentDetail}>50</a>
					</Form.Item>
					<Form.Item name="Course Description" label="Course Description">
            This course can help you quickly understand e-commerce operation
            skills This course can help you quickly understand e-commerce
            operation skills This course can help you quickly understand
            e-commerce operation skills This course can help you quickly
            understand e-commerce operation skills This course can help you
            quickly understand e-commerce operation skills
					</Form.Item>
					<Form.Item name="starttime" label="Status">
                       Closed
					</Form.Item>
				</Form>
			</Modal>

			<StudentsModal
				setStudentDetail={(f)=> setStudentDetail(f)}
				studentDetail={studentDetail}
			/>
		</div>
	);
});

export default MyCourse;
