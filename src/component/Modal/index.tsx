import React, { ReactElement } from 'react';
import { Button, Modal } from 'antd';
import { ExclamationOutlined } from '@ant-design/icons';

interface ModalPropsType {
  visible: boolean;
  width?: string|number,
  cancelText?: string;
  confirmText?: string;
  title?: string;
  hasFooter?: boolean;
  cancelCallback: () => void;
  confirmCallback: () => void;
  hasMessageIcon?: boolean;
  confirmButton?: boolean;
  className?: string;
  message?: string,
  children?: ReactElement
}

const Component: React.FC<ModalPropsType> = (props) => {
	const {
		visible,
		cancelText = 'Cancellation',
		confirmText = 'Save',
		title = 'Tips',
		hasFooter,
		cancelCallback = () => {},
		confirmCallback = () => {},
		hasMessageIcon = true,
		confirmButton = false,
		className,
		...arg
	} = props;
	return (
		<Modal
			title={title}
			width={props.width || 600}
			keyboard={false}
			maskClosable={false}
			visible={visible}
			onCancel={cancelCallback}
			destroyOnClose={true}
			centered
			footer={
				hasFooter === false ? null : (
					<>
						<Button onClick={cancelCallback}>{cancelText}</Button>
						{confirmButton ? (
							confirmButton
						) : (
							<Button type="primary" onClick={confirmCallback}>
								{confirmText}
							</Button>
						)}
					</>
				)
			}
			{...arg}
		>
			{(props.message && (
				<div className="modal-body-message">
					{hasMessageIcon && (
						<span className="icon-wrapper icon-wrapper-warn">
							<ExclamationOutlined />
						</span>
					)}
					{props.message}
				</div>
			)) ||
        ''}
			{props.children}
		</Modal>
	);
};

export default React.memo(Component);
