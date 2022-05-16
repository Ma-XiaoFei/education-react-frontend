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
	Tree,
	TreeDataNode,
	Upload,
	Tabs,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import './index.less';
import Modal from '@/component/Modal';
import utils from '@/utils';
import editUrl from '@/static/img/edit.png';
import deleteUrl from '@/static/img/delete.png';

interface ColsType {
  coursename: string;
}

const lecturerManage = memo(() => {
	const [ addOrgForm ] = Form.useForm();
	const [ addOrgModal, setAddOrgModal ] = useState(false);
	const [ editOrgModal, setEditOrgModal ] = useState(false);
	const [ studentDetailModal, setStudentDetailModal ] = useState(false);
	const [ registerStudentModal, setRegisterStudentModal ] = useState({ status: false, type: '' });
	const [ selectedKeys, setSelectedKeys ] = useState<React.Key[]>([]);
	const [ orgEdittingKey, setOrgEdittingKey ] = useState<number|string>('');
	const [ editRecord, setEditRecord ] = useState({});
	const Tablecolumns: ColumnsType<ColsType> = [
		{
			title: 'Student Name',
			dataIndex: '1',
		},
		{
			title: 'Mailbox',
			dataIndex: '2',
		},
		{
			title: 'Affiliation',
			dataIndex: '3',
		},
		{
			title: 'Register for a course',
			dataIndex: 's',
		},
		{
			title: 'Complete the course',
			dataIndex: 's',
		},
		{
			title: 'Attendance',
			dataIndex: 's',
		},
		{
			title: 'Absence',
			dataIndex: 's',
		},
		{
			title: 'Registration Time',
			dataIndex: 'starttime',
		},
		{
			title: 'Operation',
			dataIndex: 'operation',
			width: '250px',
			align: 'center',
			fixed: 'right',
			render: (text,record) => (
				<Space>
					<a onClick={()=> {
						setStudentDetailModal(true);
						setEditRecord(record);
					}}>Details</a>
					<a onClick={handleResetPassword}>Reset Password</a>
					<a onClick={handleDelete}>Delete</a>
				</Space>
			),
		},
	];
	const studentDetailCourcecolumns: ColumnsType<ColsType> = [
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
			title: '讲师',
			dataIndex: 'lecturer',
		},
		{
			title: 'Course Description',
			dataIndex: 'desc',
		}
	];
	const studentDetailEndCourceColumns: ColumnsType<ColsType> = [
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
			title: '讲师',
			dataIndex: 'lecturer',
		},
		{
			title: 'Absence from work or not',
			dataIndex: 's',
		},
		{
			title: 'Rating',
			dataIndex: 'sc',
		},
		{
			title: '成绩',
			dataIndex: 'score',
		},
		{
			title: 'Course Description',
			dataIndex: 'desc',
		}
	];
	const Tabledata = Array(20).fill({
		key: '1',
		s: '12',
		1: 'jul',
		starttime: '2022-06-12 14:00:00',
		duration: '120minutes',
		lecturer: '张立',
		step: '1/10',
		2: 'xxx@xxx.com',
		3: 'Institution 1',
		description: '从专业角度分析电商运营技巧，课…',
	});
	const Tabledata1 = Array(10).fill({
		key: '1',
		coursename: '电商运营妙招',
		starttime: '2022-06-12 14:00:00',
		duration: '120minutes',
		lecturer: '张立',
		description: '从专业角度分析电商运营技巧，课…',
		desc: 'xxxxxxxxxxxxxxxxx',
		score: 99,
		sc: '5',
		s: '否'
	});

	const onSelect = (keys: React.Key[], info: any) => {
		if (info.selected){
			setSelectedKeys([ info.selectedNodes[0].key ]);
			console.log('selected', selectedKeys, info);
		}
	};

	const treeData = [
		{
			title: 'ALL',
			key: '0-0',
			children: [
				{
					title: 'Institution 1',
					key: '0-0-0',
				},
				{
					title: 'Institution 2',
					key: '0-0-1',
				},
			],
		},
	];

	const titleRender = useCallback((data: TreeDataNode) => {
		const { key } = data;
		return (
			<div className='flex-space tree-box'>
				<span>{data.title}</span>
				<span>
					{data.title === 'ALL' ? (
						<a onClick={()=> {
							setAddOrgModal(true);
						}}>Add</a>
					) : (
						<>
							<img src={editUrl}
								onClick={handleOrgEdit.bind(null, key)}/>
							<img src={deleteUrl}
								onClick={handleOrgDelete}/>
						</>
					)}
				</span>
			</div>
		);
	}, [ orgEdittingKey ]);

	const handleResetPassword = ()=> {
		utils.confirm({
			content: 'After resetting the password the login password of this account is changed to 12345678, are you sure you want to reset it?',
			onOk: ()=> {}
		});
	};

	const handleDelete = ()=> {
		utils.confirm({
			content: 'Are you sure you want to delete it?',
			onOk: ()=> {}
		});
	};

	const handleOrgEdit = (key: number|string)=> {
		setOrgEdittingKey(key);
		setEditOrgModal(true);
	};

	const handleOrgDelete = ()=> {
		utils.confirm({
			content: 'Are you sure you want to delete it?',
			onOk: ()=> {}
		});
	};

	return (
		<div id="student-manage">
			<Row style={{ flexFlow: 'row' }} gutter={16}>
				<Col flex="200px">
					<div className="institution-box">
						<div className='box-title'>Institutional Management</div>
						<div>
							<Tree
								defaultExpandAll={true}
								titleRender={titleRender}
								onSelect={onSelect}
								treeData={treeData}
								selectedKeys={selectedKeys}
							/>
						</div>
					</div>
				</Col>
				<Col flex="auto" className='right-main'>
					<Row>
						<Col span={13}>
							<Form
								layout="inline"
								onFinish={(data) => {
									console.log(data);
								}}
							>
								<Form.Item name="username">
									<Input
										suffix={<SearchOutlined />}
										placeholder="Enter student name"
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
						<Col
							span={11}
							style={{ textAlign: 'right' }}>
							<Space>
								<Button
									type="primary"
									onClick={()=> setRegisterStudentModal({ status: true, type: 'one' })}>Registered Students</Button>
								<Button
									type="primary"
									onClick={()=> setRegisterStudentModal({ status: true, type: 'many' })}>Bulk Registration</Button>
							</Space>
						</Col>
					</Row>

					<Table
						style={{ marginTop: 12 }}
						scroll={{ x: 1000, y: 500 }}
						columns={Tablecolumns}
						dataSource={Tabledata}
						size="small"
						pagination={{
							total: 500,
							defaultCurrent: 2,
							showQuickJumper: true,
						}}
					/>
				</Col>
			</Row>
			<Modal
				title={addOrgModal ? 'Adding Organizations' : 'Editorial Agency' }
				visible={addOrgModal || editOrgModal}
				confirmText="Determine"
				confirmCallback={()=> {
					addOrgForm.submit();
					setAddOrgModal(false);
					setEditOrgModal(false);
				}}
				cancelCallback={()=> {
					setAddOrgModal(false);
					setEditOrgModal(false);
				}}>
				<Form
					wrapperCol={{ span: 9 }}
					labelCol={{ span: 9 }}
					onFinish={(da)=> {
						console.log(da,'----');
					}}
					form={addOrgForm}
				>
					<Form.Item
						name='Institution Name'
						label='Institution Name'
					>
						<Input maxLength={40}/>
					</Form.Item>
				</Form>
			</Modal>
			<Modal
				title={registerStudentModal.type === 'one' ? 'Registered Students' : 'Bulk Registration'}
				visible={registerStudentModal.status}
				confirmText="Determine"
				confirmCallback={()=> {
					setRegisterStudentModal({ status: false, type: '' });
				}}
				cancelCallback={()=> {
					setRegisterStudentModal({ status: false, type: '' });
				}}>
				<Form
					wrapperCol={{ span: 9 }}
					labelCol={{ span: 9 }}
					onFinish={(data)=> {
					}}
					form={addOrgForm}
				>
					{
						registerStudentModal.type === 'one' ?
							(<>
								<Form.Item
									name='s'
									label='Affiliation'
								>
									<Select placeholder="Please select" options={[]}/>
								</Form.Item>
								<Form.Item
									name='f'
									label='Student Name'
								>
									<Input placeholder="Please enter"/>
								</Form.Item>
								<Form.Item
									name='a'
									label='Mailbox'
								>
									<Input type={'email'} placeholder="Please enter"/>
								</Form.Item>
								<Form.Item label=" " colon={false}>
									<div style={{ color: '#ccc' }}>
										Note: Mailbox is the login account, the initial password is 87654321 by default
									</div>
								</Form.Item>
							</>)

							: (
								<>
									<div>
										支持导入Excel文件，请<a>下载模板</a>按要求填写内容再进行上传
										<Row>
											<Upload><Button type='primary'>Select file</Button></Upload>
										</Row>
									</div>
								</>
							)
					}
				</Form>
			</Modal>
			<Modal
				width={850}
				title='Student Detail'
				visible={studentDetailModal}
				confirmText="Determine"
				confirmCallback={()=> {
					setStudentDetailModal(false);
					setEditRecord({});
				}}
				cancelCallback={()=> {
					setStudentDetailModal(false);
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
							label='Student Name'
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
							label='Affiliation'
						>
							<Select style={{ width: 180 }} placeholder="Please select"/>
						</Form.Item>
					</Form>
					<h4 style={{ marginTop: 10 }}>
						课程情况
					</h4>
					<Tabs defaultActiveKey='1'>
						<Tabs.TabPane tab="Register for a course" key='1'>
							<Table
								style={{ marginTop: 12 }}
								scroll={{ y: 350 }}
								columns={studentDetailCourcecolumns}
								dataSource={Tabledata1}
								size="small"
								pagination={{
									total: 10,
									defaultCurrent: 1,
								}}
							/>
						</Tabs.TabPane>
						<Tabs.TabPane tab="结束课程" key='2'>
							<Table
								style={{ marginTop: 12 }}
								scroll={{ y: 350 }}
								columns={studentDetailEndCourceColumns}
								dataSource={Tabledata1}
								size="small"
								pagination={{
									total: 10,
									defaultCurrent: 1,
								}}
							/>
						</Tabs.TabPane>
					</Tabs>
				</div>

			</Modal>
		</div>
	);
});

export default lecturerManage;
