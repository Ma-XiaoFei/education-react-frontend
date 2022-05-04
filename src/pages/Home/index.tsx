import React, { memo } from 'react';
import './index.less';
import { Card } from 'antd';
import { Table } from 'antd';
import { Pagination } from 'antd';
import { Button } from 'antd';

const Tablecolumns = [
	{
		title: '序号',
		dataIndex: 'name',
	},
	{
		title: '课程名称',
		dataIndex: 'age',
	},
	{
		title: '讲师',
		dataIndex: 'address',
	},
	{
		title: '作业评分',
		dataIndex: 'address',
	},
	{
		title: '评语',
		dataIndex: 'address',
	},
	{
		title: '操作时间',
		dataIndex: 'address',
	},
	{
		title: '操作',
		dataIndex: 'address',
	},
];
const Tabledata = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
];
const coursesLists = [
	{
		coursesTitle: '课程名称课程名称课程名称课程名称',
		coursesName: 'iconfont张丽',
		coursesTime: 'iconfont12:24',
	},
	{
		coursesTitle: '课程名称课程名称课程名称课程名称',
		coursesName: 'iconfont张丽',
		coursesTime: 'iconfont12:24',
	},
	{
		coursesTitle: '课程名称课程名称课程名称课程名称',
		coursesName: 'iconfont张丽',
		coursesTime: 'iconfont12:24',
	},
];
const Home = memo(() => {
	const onChange = (pageNumber) => {
		// console.log('Page: ', pageNumber);
	};
	return (
		<div className="homeBox">
			<div className="cardBox">
				{/* <div> */}
				<Card
					size="small"
					title="Learning courses"
					bordered={false}
					style={{ width: '50%' }}
				>
					{coursesLists.map((t, i) => {
						return (
							<ul key={i}>
								<li className="flex-1 flex-box">
									<div className="icon-course"></div>
									<div className="course-box">
										<p className="text-ellipsis">{t.coursesTitle}</p>
										<p className="user">
											<i></i> {t.coursesName}
										</p>
										<p className="course-time">
											<i></i>
											{t.coursesTime}
										</p>
									</div>
								</li>
								<li>
									<Button type="primary">Learing</Button>
								</li>
							</ul>
						);
					})}
				</Card>
				{/* </div> */}
				<div className="site-card-border-less-wrapper">
					<Card size="small" title="Wait for the items" bordered={false}>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</div>
			</div>
			{/* 表格 */}
			<div className="tabelBox">
				<Card size="small" title="Recent feedback" bordered={false}>
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
				</Card>
			</div>
		</div>
	);
});

export default Home;
