import React, { memo } from 'react';
import './index.less';
import { Table ,Space,Input } from 'antd';
const Tablecolumns = [
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
		// align:'center',
		render: () =>  <Space size="middle">
			<a>详情</a>
			<a>申请</a>
		</Space>
	}
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
		description: '从专业角度分析电商运营技巧，课…'
	},
	{
		key: '2',
		coursename: '电商运营妙招',
		starttime: '2022-06-12 14:00:00',
		duration: '120分钟',
		lecturer: '张立',
		state: '未开始',
		organization: '机构1',
		description: '从专业角度分析电商运营技巧，课…'
	},
	{
		key: '3',
		coursename: '电商运营妙招',
		starttime: '2022-06-12 14:00:00',
		duration: '120分钟',
		lecturer: '张立',
		state: '未开始',
		organization: '机构1',
		description: '从专业角度分析电商运营技巧，课…'
	},
	{
		key: '4',
		coursename: '电商运营妙招',
		starttime: '2022-06-12 14:00:00',
		duration: '120分钟',
		lecturer: '张立',
		state: '未开始',
		organization: '机构1',
		description: '从专业角度分析电商运营技巧，课…'
	},
	{
		key: '5',
		coursename: '电商运营妙招',
		starttime: '2022-06-12 14:00:00',
		duration: '120分钟',
		lecturer: '张立',
		state: '未开始',
		organization: '机构1',
		description: '从专业角度分析电商运营技巧，课…'
	},
];
const About = memo(() => {
	return (
		<div>
			<Input placeholder="输入课程/讲师名称" />
			<Table
				scroll={{ x: 500 }}
				columns={Tablecolumns}
				dataSource={Tabledata}
				size="small"
				pagination={{
					total: 500,
					defaultCurrent: 2,
					showQuickJumper: true,
				}}
			/>
		</div>
	);
});


export default About;