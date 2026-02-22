import React from 'react';
import ReactDOM from 'react-dom/client';
import { SwipeRow } from './components/SwipeRow';
import './playground.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div className='playground-container'>
			<SwipeRow
				actions={[
					{
						label: 'Archive',
						onClick: () => alert('Archive clicked'),
						backgroundColor: '#f59e0b', // Amber
						width: 80,
					},
					{
						label: 'Delete',
						onClick: () => alert('Delete clicked'),
						backgroundColor: '#ef4444', // Red
						width: 80,
					},
				]}
			>
				<div className='font-medium' style={{ userSelect: 'none' }}>
					Swipe me (Archive / Delete)
				</div>
			</SwipeRow>
			<SwipeRow
				actions={[
					{
						label: 'Reply',
						onClick: () => alert('Reply clicked'),
						backgroundColor: '#3b82f6', // Blue
						width: 80,
					},
					{
						label: 'Read',
						onClick: () => alert('Read clicked'),
						backgroundColor: '#10b981', // Emerald
						width: 80,
					},
				]}
			>
				<div className='font-medium' style={{ userSelect: 'none' }}>
					Swipe me (Reply / Read)
				</div>
			</SwipeRow>
		</div>
	</React.StrictMode>,
);
