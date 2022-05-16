import React, { memo, useState } from 'react';
import { Table, Space, Input, Form, Select, Button, Row, Col, Radio, Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import utils from '@/utils';
import Modal from '@/component/Modal';

interface ColsType {
  coursename: string;
}

const lecturerManage = memo(() => {
	const [ lecturerDetailModal, setLecturerDetailModal ] = useState(false);
	const [ addLecturerModal, setAddLecturerModal ] = useState(false);
	const [ editRecord, setEditRecord ] = useState({});
	const Tablecolumns: ColumnsType<ColsType> = [
		{
			title: 'Serial number',
			render: (t: string, r: any, i: number) => i + 1,
		},
		{
			title: 'Lecturer name',
			dataIndex: '1',
		},
		{
			title: 'Gender',
			dataIndex: '3',
		},
		{
			title: 'Mailbox',
			dataIndex: '2',
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
			render: (t,record) => (
				<Space>
					<a onClick={()=> {
						setLecturerDetailModal(true);
						setEditRecord(record);
					}}>Details</a>
					<a onClick={handleResetPassword}>Reset Password</a>
					<a onClick={handleDelete}>Delete</a>
				</Space>
			),
		},
	];

	const lecturerDetailCourcecolumns: ColumnsType<ColsType> = [
		{
			title: 'Serial number',
			render:(text,record,i)=> {
				return <>
					{i+1}
				</>;
			}
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
			title: 'Participating Students',
			dataIndex: 'duration',
		},
		{
			title: 'Status',
			dataIndex: 'duration',
		},
		{
			title: 'Course Description',
			dataIndex: 'desc',
		}
	];

	const Tabledata = Array(20).fill({
		key: '1',
		1: 'kkkk',
		2: 'xxxx@xxx',
		3: 'a',
		starttime: '2022-06-12 14:00:00',
		duration: '120 minutes',
		lecturer: 'Zhang Li',
		step: '10',
		organization: 'Institution 1',
		description: 'Analysis of e-commerce operation skills from a professional perspective, class...',
	});
	const Tabledata1 = Array(20).fill({
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

	const handleResetPassword = ()=> {
		utils.confirm({
			content: 'Click reset password, prompt "reset password after the account password change to 888888, sure you want to reset", confirm the reset to take effect, the original account password can not login',
			onOk: ()=> {}
		});
	};

	const handleDelete = ()=> {
		utils.confirm({
			content: 'Are you sure you want to delete it?',
			onOk: ()=> {}
		});
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
					<Button
						type="primary"
						onClick={()=> setAddLecturerModal(true)}>
							Add Instructor
					</Button>
				</Col>
			</Row>

			<Table
				style={{ marginTop: 12 }}
				scroll={{ x: 1000,y: 500 }}
				columns={Tablecolumns}
				dataSource={Tabledata}
				size="small"
				pagination={{
					total: 20,
					defaultCurrent: 1,
					showQuickJumper: true,
				}}
			/>
			<Modal
				title='Add Instructor'
				visible={addLecturerModal}
				confirmText="Determine"
				confirmCallback={()=> {
					setAddLecturerModal(false);
				}}
				cancelCallback={()=> {
					setAddLecturerModal(false);
				}}>
				<Form
					wrapperCol={{ span: 9 }}
					labelCol={{ span: 9 }}
					onFinish={(data)=> {
					}}
					// form={addOrgForm}
				>

					<Form.Item
						name='s'
						label='Name of Lecturer'
					>
						<Input placeholder="Please enter" maxLength={40}/>
					</Form.Item>
					<Form.Item
						name='gender'
						label='Gender'
					>
						<Radio.Group>
							<Radio value="a">Male</Radio>
							<Radio value="b">Female</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item
						name='email'
						label='Mailbox'
					>
						<Input placeholder="Please enter"/>
					</Form.Item>
					<Form.Item label=" " colon={false}>
						<div style={{ color: '#ccc' }}>
							Note: Mailbox is the login account, the initial password is 12345678 by default
						</div>
					</Form.Item>
				</Form>
			</Modal>

			<Modal
				width={850}
				title='Lecturer Detail'
				visible={lecturerDetailModal}
				confirmText="Determine"
				confirmCallback={()=> {
					setLecturerDetailModal(false);
					setEditRecord({});
				}}
				cancelCallback={()=> {
					setLecturerDetailModal(false);
					setEditRecord({});
				}}>
				<div>
					<h4>
						Basic Information
					</h4>
					<Form
						layout="inline"
						initialValues={editRecord}
						onFinish={(data)=> {
						}}
					>
						<Form.Item
							name='1'
							label='Name of Lecturer'
						>
							<Input placeholder="Please enter"/>
						</Form.Item>
						<Form.Item
							name='2'
							label='Mailbox'
						>
							<Input disabled placeholder="Please enter"/>
						</Form.Item>
						<Form.Item
							name='3'
							label='Gender'
						>
							<Radio.Group>
								<Radio value="a">Male</Radio>
								<Radio value="b">Female</Radio>
							</Radio.Group>
						</Form.Item>
					</Form>
					<h4 style={{ marginTop: 10 }}>
						Course Details
					</h4>
					<Table
						style={{ marginTop: 12 }}
						scroll={{ y: 350 }}
						columns={lecturerDetailCourcecolumns}
						dataSource={Tabledata1}
						size="small"
						pagination={{
							total: 10,
							defaultCurrent: 1,
						}}
					/>
				</div>

			</Modal>
		</div>
	);
});

export default lecturerManage;
