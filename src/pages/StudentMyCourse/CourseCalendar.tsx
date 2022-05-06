import React, { memo, useState } from 'react';
import { Calendar,Badge } from 'antd';
import Modal from '@/component/Modal';
import { Moment } from 'moment';

// function getMonthData(value) {
// 	if (value.month() === 8) {
// 		return 1394;
// 	}
// }

interface PropType {
    calendarModalStatus: boolean,
    setCalendarModalStatus(flag: boolean):void
}

const CourseCalendar: React.FC<PropType> = memo((props) => {

	// const monthCellRender = (value)=>  {
	// 	console.log(value, 'month');
	// 	const num = getMonthData(value);
	// 	return num ? (
	// 		<div className="notes-month">
	// 			<section>{num}</section>
	// 			<span>Backlog number</span>
	// 		</div>
	// 	) : null;
	// };

	const dateCellRender = (value: Moment)=> {
		const listData = [ 3,7, 10,20,18 ].includes(value.date()) ? [
			{ content: Math.ceil(Math.random()*(10-1)+1) + 'Sessions' }
		]: [];
		return (
			<ul className="events">
				{listData.map(item => (
					<li key={item.content}>
						<Badge status='processing' text={item.content} />
					</li>
				))}
			</ul>
		);
	};

	return (
		<div>
			<Modal
				width={800}
				title="Assignments"
				visible={props.calendarModalStatus}
				confirmText="Determine"
				confirmCallback={() => {
					props.setCalendarModalStatus(false);
				}}
				cancelCallback={() => {
					props.setCalendarModalStatus(false);
				}}
			>
				<Calendar
					className='calendar-course'
					headerRender={()=> ''}
					dateCellRender={dateCellRender}
					// monthCellRender={monthCellRender}
				/>
			</Modal>
		</div>
	);
});

export default CourseCalendar;
