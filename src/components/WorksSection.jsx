// WorksSection.js
import React, { useRef } from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import digitalascentPeek from '/digitalascent-peek.png';
import { motion, useScroll } from 'framer-motion';
function WorksSection() {
	const MotionCard = motion(Card);

	return (
		<section id='sec-2'>
			<Grid
				container
				sx={{
					margin: 'auto',
					marginTop: 10,
					marginBottom: -3,
					padding: 3,
					height: '100dvh',
				}}
			>
				{/* 
				<Typography
					variant='h3'
					sx={{ color: '#c60054', fontWeight: 600, marginBottom: '30px' }}
				>
					My Works
				</Typography>
				 */}
				<Grid
					container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '80dvh',
					}}
				>
					<Grid item></Grid>
					<Grid item>
						<MotionCard
							whileHover={{ borderColor: '#c60054', opacity: 1 }}
							variant='outlined'
							sx={{
								backgroundColor: 'transparent',
								borderColor: '#550024',
								opacity: 0.6,
								padding: 1.5,
								borderRadius: 3,
								width: '330px',
								maxWidth: '80vw',
							}}
						>
							<a
								draggable='false'
								target='_blank'
								href='https://digitalascent.space'
								style={{ width: '330px', maxWidth: '80vw' }}
							>
								<img
									draggable='false'
									style={{
										width: '330px',
										maxWidth: '80vw',
										borderRadius: '7px',
									}}
									src={digitalascentPeek}
								/>
							</a>
						</MotionCard>{' '}
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
}

export default WorksSection;
