import { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import {
	Box,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Stack
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import { BytesToSize } from '@utils';
import Cedula from '@images/cedula.png';
import { useField, useFormikContext } from 'formik';
import { HelperError } from '@components';

type FileUpload = {
	name: string;
};

export const FileUpload: FC<FileUpload> = ({ name }) => {
	const { t } = useTranslation();
	const [files, setFiles] = useState<File[]>([]);
	const [field, { error }] = useField(name);
	const { setFieldValue } = useFormikContext();
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: {
			'image/png': ['.png'],
			'image/jpg': ['.jpg'],
			'image/jpeg': ['.jpeg']
		},
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file)
					})
				)
			);
			setFieldValue(field.name, acceptedFiles);
		}
	});
	return (
		<div>
			{files.length > 0 ? (
				<Box>
					<List sx={{ p: 0 }}>
						{files.map((file) => (
							<ListItem
								key={file.name}
								sx={{
									border: 1,
									padding: '16px 24px',
									borderColor: 'rgba(0, 0, 0, 0.23)',
									borderRadius: 1,
									'& + &': {
										mt: 1
									}
								}}
							>
								<ListItemIcon sx={{ alignItems: 'center' }}>
									<AttachFileIcon fontSize="small" />
									<ImageIcon fontSize="large" />
								</ListItemIcon>
								<ListItemText
									primary={file.name}
									primaryTypographyProps={{
										color: 'textPrimary',
										variant: 'subtitle2'
									}}
									secondary={BytesToSize(file.size)}
								/>

								<IconButton
									edge="end"
									onClick={() =>
										setFiles((prevFiles) => prevFiles.filter((_file) => _file.name !== file.name))
									}
								>
									<CloseIcon fontSize="small" />
								</IconButton>
							</ListItem>
						))}
					</List>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							mt: 2
						}}
					></Box>
				</Box>
			) : (
				<Box
					sx={{
						alignItems: 'center',
						textAlign: 'center',
						border: 1,
						borderRadius: 1,
						borderStyle: 'solid',
						borderColor: 'rgba(0, 0, 0, 0.23)',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						outline: 'none',
						maxHeight: '300px',
						width: '100%',
						p: 2,
						...(isDragActive && {
							backgroundColor: 'action.active',
							opacity: 0.5
						}),
						'&:hover': {
							backgroundColor: 'action.hover',
							cursor: 'pointer',
							opacity: 0.5
						}
					}}
					{...getRootProps()}
				>
					<input name={field.name} {...getInputProps()} />
					<Stack>
						<Box>
							<img src={Cedula} width={120} height={80} />
						</Box>
						<Box sx={{ p: 2 }}>
							<Typography variant="h6">{`${t('fileUpload.title')} (${t(
								'fileUpload.isRequired'
							)})`}</Typography>
							<Box sx={{ mt: 2 }}>
								<Typography variant="body1" fontSize={14} mb={1}>
									{`${t('fileUpload.howTo1')} `}{' '}
									<Link underline="always">{t('fileUpload.howTo2')}</Link>
									{` ${t('fileUpload.howTo3')}`}
								</Typography>
								<Typography variant="body1" fontSize={12}>
									{t('fileUpload.supportedFileTypes')}
								</Typography>
								<Typography variant="body1" fontSize={12}>
									{`${t('fileUpload.qty')} - ${t('fileUpload.maxFileSize')}`}
								</Typography>
							</Box>
						</Box>
					</Stack>
					{!!error && <HelperError field={name} />}
				</Box>
			)}
		</div>
	);
};
