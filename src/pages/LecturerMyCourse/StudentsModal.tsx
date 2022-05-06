import React, { memo, useState } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Modal from '@/component/Modal';

interface StudentsColsType {
  name: string;
}

const data = Array(20).fill({
	name: 'lucy',
	email: '11111@aa.com',
	institution: '111',
});

interface PropsType {
    studentDetail: boolean,
    setStudentDetail(flag: boolean):void
}

const StudentsModal: React.FC<PropsType> = memo((props) => {
	const [ studentData, setStudentData ] = useState([ ...data ]);
	const studentsCol: ColumnsType<StudentsColsType> = [
		{
			dataIndex: 'name',
		},
		{
			dataIndex: 'email',
		},
		{
			dataIndex: 'institution',
		},
	];

	return (
		<Modal
			width={700}
			title="Students detail"
			visible={props.studentDetail}
			confirmText="Determine"
			confirmCallback={() => {
				props.setStudentDetail(false);
			}}
			cancelCallback={() => {
				props.setStudentDetail(false);
			}}
		>
			<Table
				className='student-table'
				scroll={{ y: 400 }}
				pagination={false}
				columns={studentsCol}
				dataSource={studentData}/>
		</Modal>
	);
});

export default StudentsModal;
