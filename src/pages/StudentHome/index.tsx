import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table, Tabs, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import './index.less';

const { TabPane } = Tabs;
interface ColsType {
  key: number;
  teacher: string;
  mes: string;
  date: string;
  score: number;
}

const Tabledata: ColsType[] = [
	...Array.from({ length: 50 }, () => ({
		key: Math.random(),
		lessonName: 'Name',
		teacher: 'lucy',
		mes: 'Not a bad job, keep up the good work',
		date: '2022-06-12 14:00:00',
		score: 78,
	})),
];

const coursesLists = Array(10).fill({
	coursesTitle: 'course name',
	coursesName: 'lucy',
	coursesTime: '12:24',
});
const Home = memo(() => {
	const navigate = useNavigate();
	const onChange = () => {
		// console.log('Page: ', pageNumber);
	};


	const Tablecolumns: ColumnsType<ColsType> = [
		{
			title: 'Serial number',
			render: (t, r, i: number) => i + 1,
		},
		{
			title: 'Course Name',
			dataIndex: 'lessonName',
		},
		{
			title: 'Lecturer',
			dataIndex: 'teacher',
		},
		{
			title: 'Assignment Grading',
			dataIndex: 'score',
		},
		{
			title: 'Comments',
			dataIndex: 'mes',
		},
		{
			title: 'Operation time',
			dataIndex: 'date',
		},
		{
			title: 'Operation',
			align: 'center',
			render: (t, record, index: number) => {
				return <Button
					type="link"
					onClick={pushMyCourse}
				>
					view
				</Button>;
			},
		},
	];

	const pushMyCourse = useCallback(() => {
		navigate('/myCourse');
	}, []);

	return (
		<div className="homeBox">
			<div className="cardBox">
				<Card size="small" title="Learning courses" bordered={false}>
					{coursesLists.map((t, i) => {
						return (
							<ul key={i}>
								<li className="flex-1 flex-box">
									<div className="icon-course"></div>
									<div className="course-box">
										<p className="cource-name" title={t.coursesTitle}>
											{t.coursesTitle}
										</p>
										<p className="user">
											<i className="iconfont icon-icon_icon_laoshiguanli"></i>
											{t.coursesName}
										</p>
										<p className="course-time">
											<i className="iconfont icon-play-circle"></i>
											{t.coursesTime}
										</p>
									</div>
								</li>
								<li>
									<Button
										type="primary"
										onClick={pushMyCourse}
									>
											Learing
									</Button>
								</li>
							</ul>
						);
					})}
				</Card>
				<div className="site-card-border-less-wrapper">
					<Card size="small" title="Wait for the items" bordered={false}>
						<Tabs
							tabBarGutter={10}
							size="large"
							defaultActiveKey="0"
							tabPosition={'top'}
						>
							{[
								{ date: 20, week: 'Monday' },
								{ date: 21, week: 'Tuesday' },
								{ date: 22, week: 'Wednesday' },
								{ date: 23, week: 'Thursday' },
								{ date: 24, week: 'Friday' },
								{ date: 25, week: 'Saturday' },
								{ date: 26, week: 'Sunday' },
							].map((t, i) => (
								<TabPane
									tab={
										<div className="tabs-date">
											<div className="title">{t.week}</div>
											<div className="date">{t.date}</div>
										</div>
									}
									key={i}
									disabled={i === 28}
								></TabPane>
							))}
						</Tabs>
						<div className="test-content">
							{[ 1, 2, 3, 4, 5 ].map((t) => {
								return (
									<ul key={t}>
										<li className="flex-space">
											<span>
												<i className="iconfont icon-file-pdf"></i>Job-title.pdf
											</span>
											<span style={{ color: '#666' }}>course name</span>
											<Button
												type="link"
												onClick={pushMyCourse}
											>
												view
											</Button>
										</li>
									</ul>
								);
							})}
						</div>
					</Card>
				</div>
			</div>
			<div className="tabelBox">
				<Card size="small" title="Recent feedback" bordered={false}>
					<Table<ColsType>
						size="small"
						scroll={{ x: 500, y: 100 }}
						columns={Tablecolumns}
						dataSource={Tabledata}
						pagination={{
							total: Tabledata.length,
							defaultCurrent: 1,
							showSizeChanger: true,
							showQuickJumper: true,
						}}
					/>
				</Card>
			</div>
		</div>
	);
});

export default Home;
