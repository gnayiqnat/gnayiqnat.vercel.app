// IntroductionSection.jsx
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import ButtonOutlined from './buttons/ButtonOutlined';
import GithubButton from './buttons/GithubButton';
import { motion } from 'framer-motion';

function IntroductionSection(props) {
	return (
		<>
			<Grid
				container
				sx={{
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 'clamp(100px, 20dvh, 30dvh)',
					width: '100vw',
					marginBottom: '10dvh',
					position: 'relative',
				}}
			>
				<Grid item>
					{/* <Typography
						variant='h2'
						sx={{
							fontWeight: 700,
							lineHeight: 0.7,
							fontSize: { xs: 50 },
						}}
					>
						i am
					</Typography> */}
					<Typography
						align='center'
						sx={{
							color: '#c60054',
							fontWeight: 700,
							lineHeight: 0.5,
							fontSize: { xs: 60, sm: 80, md: 100 },
							marginBottom: '35px',
						}}
					>
						gnayiqnat
					</Typography>
					<Typography
						align='center'
						sx={{
							
							color: '#767676',
							fontSize: '23px',
							fontFamily: 'Inter',
						}}
					>
						A self-taught full-stack web developer
					</Typography>
					<Grid container sx={{ justifyContent: 'center', padding: '30px', marginTop: '10px', marginBottom: '-10px' }}>
						<Grid item>
							<ExploreButton
								text='Explore my works'
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				sx={{
					width: '100vw',
					padding: '20px',
					justifyContent: 'end',
				}}
			>
				<Grid item>
					<GithubButton />
				</Grid>
			</Grid>
		</>
	);
}

function ExploreButton(props) {
	return (
		<>
			<motion.button
				style={{
					backgroundColor: 'transparent',
					borderStyle: 'solid',
					borderColor: '#c60054',
					borderRadius: 20,
					padding: '13px 15px',
					cursor: 'pointer',
				}}
				whileHover={{ opacity: 0.3 }}
				onClick={() => {document.getElementById("sec-2").scrollIntoView({behavior: 'smooth'})}}
			>
				<Typography
					sx={{ color: '#c60054', fontSize: '20px', fontWeight: 500 }}
				>
					{props.text}
				</Typography>
			</motion.button>
		</>
	);
}

export default IntroductionSection;
