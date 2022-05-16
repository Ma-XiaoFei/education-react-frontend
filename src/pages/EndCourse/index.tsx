import React, { memo, useCallback, useState } from 'react';
import { Table, Space, Input, Form, Select, Button, Upload } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import Modal from '@/component/Modal';
import StudentsModal from '@/pages/LecturerMyCourse/StudentsModal';
import './index.less';
interface ColsType {
  coursename: string;
}

const data = Array.from({ length: 50 }, (t, i) => ({
	key: i,
	name: 'lucy',
	email: '11111@aa.com',
	institution: '111',
}));

const EndCourse = memo(() => {
	const [ detailModalStatus, setDetailModalStatus ] = useState(false);
	const [ signModal, setSignModal ] = useState(false);
	const [ homeworkModal, setHomeworkModal ] = useState({
		status: false,
		title: '',
	});
	const [ studentDetail, setStudentDetail ] = useState(false);
	const [ modalJob, setModalJob ] = useState(false);
	const [ homeWorkEditModal, setHomeworkEditModal ] = useState(false);
	const [ homeWorkEditDetailModal, setHomeWorkEditDetailModal ] = useState(false);
	const [ studentData, setStudentData ] = useState([ ...data ]);
	const Tablecolumns: ColumnsType<ColsType> = [
		{
			width: '120px',
			title: 'Serial number',
			render: (t: string, r: any, i: number) => i + 1,
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
			render(text: string) {
				return <a onClick={showStudentDetail}>{text}</a>;
			},
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
			align: 'center',
			fixed: 'right',
			width: '300px',
			render: (text, record, i) => (
				<Space>
					<a onClick={handleDetail}>Details</a>
					<a onClick={handleSign}>Sign in</a>
					{
						i%2 === 0 ? (
							<a
								onClick={() =>
									setHomeworkModal({
										status: true,
										title: 'Assigning homework',
									})
								}
							>
                                  Assigning homework
							</a>)
							: <a onClick={_=> setModalJob(true)}>Job Management</a>
					}
				</Space>
			),
		},
	];
	const jobManageCols: ColumnsType<{name: string}> = [
		{ title: 'Serial number',dataIndex: 'a' },
		{ title: 'Student',dataIndex: 'a' },
		{ title: 'Affiliation',dataIndex: 'a' },
		{ title: 'Submission time',dataIndex: 'a' },
		{ title: 'Status',dataIndex: 'a' },
		{ title: 'Score',dataIndex: 'a' },
		{ title: 'Operation',render: (text, record, i)=> {
			return <>
				{ i<3 ? (
					<a onClick={()=> setHomeworkEditModal(true)}>Corrective action</a>
				) :
					<a onClick={()=> setHomeWorkEditDetailModal(true)}>Detail</a>
				}
			</>;
		} },
	];
	const signStudentsCol: ColumnsType<{ name: string }> = [
		{
			title: 'Student',
			dataIndex: 'name',
		},
		{
			title: 'email',
			dataIndex: 'email',
		},
		{
			title: 'institution',
			dataIndex: 'institution',
		},
	];
	const Tabledata = Array.from({ length: 50 }, (t, i) => ({
		key: i,
		studentsN: 12,
		coursename: 'E-commerce operation tricks',
		starttime: '2022-06-12 14:00:00',
		duration: '120 minutes',
		lecturer: 'Zhang Li',
		state: 'Not started',
		organization: 'Institution 1',
		description:
      'Analysis of e-commerce operation skills from a professional perspective, class...',
	}));
	const handleSign = () => {
		setSignModal(true);
	};

	const handleDetail = () => {
		setDetailModalStatus(true);
	};

	const showStudentDetail = () => {
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
					<Input
						suffix={<SearchOutlined />}
						placeholder="Enter the course/instructor name"
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
				setStudentDetail={(f) => setStudentDetail(f)}
				studentDetail={studentDetail}
			/>
			<Modal
				width={700}
				title="Selecting Students in Attendance"
				visible={signModal}
				confirmText="Determine"
				confirmCallback={() => {
					setSignModal(false);
				}}
				cancelCallback={() => {
					setSignModal(false);
				}}
			>
				<Table
					className="student-table"
					scroll={{ y: 360 }}
					rowSelection={{
						onChange: (...a) => {
							console.log(a);
						},
					}}
					pagination={false}
					columns={signStudentsCol}
					dataSource={studentData}
					footer={() => <>Attendance/Attendance 0/34 Attendance 0%</>}
				/>
			</Modal>
			<Modal
				title={homeworkModal.title}
				visible={homeworkModal.status}
				confirmText="Determine"
				confirmCallback={() => {
					setHomeworkModal({ ...homeworkModal, status: false });
				}}
				cancelCallback={() => {
					setHomeworkModal({ ...homeworkModal, status: false });
				}}
			>
				<Form labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
					<Form.Item name="file" label="Working Papers">
						<Upload>
							<Button type="primary">Select file</Button>{' '}
							<span style={{ color: '#B9B9B9' }}>
                             (Support word/pdf/png,No more than 10M)
							</span>
						</Upload>
					</Form.Item>
					<Form.Item name="score" label="Score">
						<Input style={{ width: 200 }} type="number" placeholder="Please enter" />
					</Form.Item>
					<Form.Item name="desc" label="Description">
						<Input.TextArea style={{ width: 200 , height: 100 }} placeholder="Please enter" />
					</Form.Item>
				</Form>
			</Modal>
			{/* job manage */}
			<Modal
				width={850}
				title='Job Management'
				visible={modalJob}
				confirmText="Determine"
				confirmCallback={() => {
					setModalJob(false);
				}}
				cancelCallback={() => {
					setModalJob(false);
				}}
			>
				<div className='job-manage'>
					<h4>Assignment details</h4>
					<ul className='title'>
						<li><label>Working Papers</label><a>xxx.pdf</a></li>
						<li><label>Score</label> <span>100</span></li>
						<li><label>Description</label> <span>xxxxxxx</span></li>
					</ul>
					<div>
						<h4>Assignment Correction</h4>
						<Select placeholder="Select Status" style={{ width: 200 }} options={[ { value: '待corrective action' } , { value: '已corrective action' } ]}/>
						<Table scroll={{ y: 300 }} columns={jobManageCols} dataSource={Array(10).fill({ a: 'xx' })}/>
					</div>
				</div>
			</Modal>
			<Modal
				title={'Assignment Correction' + (homeWorkEditDetailModal ? ' Detail' : '') }
				visible={homeWorkEditModal || homeWorkEditDetailModal}
				confirmText="Determine"
				confirmCallback={() => {
					setHomeworkEditModal(false);
					setHomeWorkEditDetailModal(false);
				}}
				cancelCallback={() => {
					setHomeworkEditModal(false);
					setHomeWorkEditDetailModal(false);
				}}
			>
				<Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
					<Form.Item label="完成作业">
						<a>作业.pdf</a>
					</Form.Item>
					<Form.Item name="score" label="Score">
						<Input disabled={homeWorkEditDetailModal} style={{ width: 200 }} type="number" placeholder="Please enter" />
					</Form.Item>
					<Form.Item name="desc" label="评语">
						<Input.TextArea disabled={homeWorkEditDetailModal} style={{ width: 200 , height: 100 }} placeholder="Please enter" />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
});

export default EndCourse;
