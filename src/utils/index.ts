import { Modal, ModalFuncProps } from 'antd';

export default {
	confirm: (arg: ModalFuncProps)=> {
		Modal.confirm({
			icon: '',
			okText: 'Confirmation',
			cancelText: 'Cancellation',
			closable:true,
			...arg
		});
	}
};
