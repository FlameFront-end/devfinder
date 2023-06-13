import React from 'react'

import styles from './MyButton.module.scss'

interface ButtonProps {
	children: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MyButton = ({ children, onClick }: ButtonProps) => (
	<button onClick={onClick} className={styles.button}>
		{children}
	</button>
)
