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
	Tree,
	TreeDataNode,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import './index.less';

interface ColsType {
  coursename: string;
}

const lecturerManage = memo(() => {
	const Tablecolumns: ColumnsType<ColsType> = [
		{
			title: '学生姓名',
			dataIndex: 'coursename',
		},
		{
			title: '邮箱',
			dataIndex: 'gender',
		},
		{
			title: '所属机构',
			dataIndex: 's',
		},
		{
			title: '注册课程',
			dataIndex: 's',
		},
		{
			title: '完成课程',
			dataIndex: 's',
		},
		{
			title: '出勤',
			dataIndex: 's',
		},
		{
			title: '缺勤',
			dataIndex: 's',
		},
		{
			title: '注册时间',
			dataIndex: 'starttime',
		},
		{
			title: '操作',
			dataIndex: 'operation',
			width: '200px',
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
		s: '12',
		coursename: '电商运营妙招',
		starttime: '2022-06-12 14:00:00',
		duration: '120分钟',
		lecturer: '张立',
		step: '1/10',
		gender: '男',
		organization: '机构1',
		description: '从专业角度分析电商运营技巧，课…',
	});

	const onSelect = (selectedKeys: React.Key[], info: any) => {
		console.log('selected', selectedKeys, info);
	};

	const onCheck = (checkedKeys: React.Key[], info: any) => {
		console.log('onCheck', checkedKeys, info);
	};

	const treeData = [
		{
			title: 'ALL',
			key: '0-0',
			children: [
				{
					title: '机构1',
					key: '0-0-0',
				},
				{
					title: '机构2',
					key: '0-0-1',
				},
			],
		},
	];

	const titleRender = useCallback((data: TreeDataNode) => {
		console.log(data);
		return (
			<div className='flex-space tree-box'>
				<span>{data.title}</span>
				<span>
					{data.title === 'ALL' ? (
						<a>添加</a>
					) : (
						<>
							<i className="iconfont icon-kechengguanli-gaoliang"></i>
							<i className="iconfont icon-kechengguanli-gaoliang"></i>
						</>
					)}
				</span>
			</div>
		);
	}, []);

	return (
		<div id="student-manage">
			<Row style={{ flexFlow: 'row' }} gutter={16}>
				<Col flex="200px">
					<div className="institution-box">
						<div className='box-title'>机构管理</div>
						<div>
							<Tree
								defaultExpandAll={true}
								titleRender={titleRender}
								onSelect={onSelect}
								// onCheck={onCheck}
								treeData={treeData}
							/>
						</div>
					</div>
				</Col>
				<Col flex="auto" className='right-main'>
					<Row>
						<Col span={16}>
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
										placeholder="输入学生姓名"
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
						<Col span={8} style={{ textAlign: 'right' }}>
							<Space>
								<Button type="primary">注册学生</Button>
								<Button type="primary">批量注册</Button>
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
							// size:'default',
							total: 500,
							defaultCurrent: 2,
							showQuickJumper: true,
						}}
					/>
				</Col>
			</Row>
		</div>
	);
});

export default lecturerManage;
