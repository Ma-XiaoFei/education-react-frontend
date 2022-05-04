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
	}
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
	}
];
const coursesLists = [
	{
		coursesTitle:'课程名称课程名称课程名称课程名称',
		coursesName:'iconfont张丽',
		coursesTime:'iconfont12:24',

	},
	{
		coursesTitle:'课程名称课程名称课程名称课程名称',
		coursesName:'iconfont张丽',
		coursesTime:'iconfont12:24',

	},
	{
		coursesTitle:'课程名称课程名称课程名称课程名称',
		coursesName:'iconfont张丽',
		coursesTime:'iconfont12:24',

	}
];
const Home = memo(() => {
	const onChange = (pageNumber)=> {
		// console.log('Page: ', pageNumber);
	};
	return (
		<div className="homeBox">
			<div className="cardBox">
				{/* <div> */}
				<Card size="small" title="Learning courses" bordered={false} style={{ width: '50%' }}>
					{
						coursesLists.map((t,i)=> {
							return (
								<ul key={i}>
									<li>显示图片</li>
									<li>
										<p>{t.coursesTitle}</p>
										<p>{t.coursesName}</p>
										<p>{t.coursesTime}</p>
									</li>
									<li><Button type="primary">Learing</Button></li>
								</ul>
							);
						})
					}
				</Card>
				{/* </div> */}
				<div className="site-card-border-less-wrapper">
					<Card size="small" title="Wait for the items" bordered={false} style={{ width: '50%' }}>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</div>
			</div>
			{/* 表格 */}
			<div className="tabelBox">
				<Table columns={Tablecolumns} dataSource={Tabledata} size="small" pagination={false}/>
				<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
			</div>
		</div>
	);
});

export default Home;
