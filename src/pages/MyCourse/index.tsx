import React, { memo, useCallback } from 'react';
import { Table, Space, Input, Form, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';


interface ColsType {
	coursename: string
}

const MyCourse = memo(() => {
	const Tablecolumns: ColumnsType<ColsType> = [
		{
			title: '序号',
			render:(t: string,r: any,i: number)=> i+1
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
			title: '状态',
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
			title: '操作',
			dataIndex: 'operation',
			align:'center',
			fixed: 'right',
			width: '150px',
			render: () => (
				<Space>
					<a onClick={handleDetail}>详情</a>
					<a>评分</a>
					<a>作业</a>
				</Space>
			),
		},
	];
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

	const handleDetail = ()=> {
		console.log(9);
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
					<Input suffix={<SearchOutlined />} placeholder="输入课程/讲师名称" />
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
		</div>
	);
});

export default MyCourse;
