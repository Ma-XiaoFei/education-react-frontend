import React, { memo, useState } from 'react';
import './index.less';
import { Table, Space, Input, Row, Form, Select, Button } from 'antd';
import { SearchOutlined, LockOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import utils from '@/utils';
import Modal from '@/component/Modal';

interface colType {
  coursename: string;
}

const AllCourse = memo(() => {
	const [ form ] = Form.useForm();
	const [ detailModalStatus, setDetailModalStatus ] = useState(false);
	const Tablecolumns: ColumnsType<colType> = [
		{
			title: 'Course Name',
			dataIndex: 'coursename',
		},
		{
			title: 'Start time',
			width: '180px',
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
			width: '200px',
			dataIndex: 'description',
		},
		{
			title: 'Operation',
			dataIndex: 'operation',
			align: 'center',
			width: '150px',
			fixed: 'right',
			render: () => (
				<Space>
					<a onClick={handleDetail}>Details</a>
					<a onClick={handleApply}>Application</a>
				</Space>
			),
		},
	];
	const Tabledata = Array(20).fill({
		key: '1',
		coursename: 'name',
		starttime: '2022-06-12 14:00:00',
		duration: '120minutes',
		lecturer: 'lucy',
		state: 'Not started',
		organization: 'Institution1',
		description:
      'Analysis of e-commerce operation skills from a professional perspective, class...',
	});

	const handleApply = () => {
		utils.confirm({
			title: 'Course Application',
			content: 'Are you sure you want to apply for this course?',
		});
	};

	const handleDetail = () => {
		setDetailModalStatus(true);
	};

	return (
		<div>
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
						placeholder="Please enter the name of the course/instructor"
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
			<Table
				style={{ marginTop: 12 }}
				scroll={{ x: 1000, y: 1000 }}
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
		</div>
	);
});

export default AllCourse;
