import merge from 'lodash/merge';
import { createTheme, Direction, Theme, ThemeOptions } from '@mui/material';
import palette from './settings/palette';
import typography from './settings/typography';
import { Components, Typography, ColorPalette } from './overrides';

interface ThemeConfig {
	direction?: Direction;
	responsiveFontSizes?: boolean;
	roundedCorners?: boolean;
	theme?: string;
}
const baseOptions: ThemeOptions = {
	direction: 'ltr',
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					boxSizing: 'border-box'
				},
				html: {
					MozOsxFontSmoothing: 'grayscale',
					WebkitFontSmoothing: 'antialiased',
					height: '100%',
					width: '100%'
				},
				body: {
					height: '100%',
					backgroundColor: palette.other.bodyBackground,
					color: palette.text.primary,
					fontFamily: typography.fontFamily,
					fontSize: typography.fontSize,
					lineHeight: 1.6
				},
				'#root': {
					height: '100%',
					'& .toastWrapper': {
						maxWidth: '450px',
						background: '#ffffff',
						'& .MuiPaper-root': {
							display: 'flex',
							padding: 0,
							borderRadius: 0,
							'& .MuiSnackbarContent-message': {
								padding: 0,
								width: '100%',
								'& > div': {
									display: 'block',
									margin: '5px',
									'& .MuiIconButton-root': {
										color: palette.text.primary,
										position: 'absolute',
										padding: '2px',
										marginTop: '-25px',
										right: '15px',
										'& .MuiSvgIcon-root': {
											width: '20px',
											height: '20px'
										}
									}
								}
							},
							'& .MuiSnackbarContent-action': {
								padding: 0
							}
						}
					}
				},
				'#nprogress .bar': {
					zIndex: '2000 !important'
				},
				'.MuiInputLabel-outlined:not(.MuiInputLabel-outlined.Mui-focused):not(.MuiInputLabel-outlined.MuiFormLabel-filled)':
					{
						color: 'rgba(0, 0, 0, 0.45);'
					},
				'.MuiCard-root.withBorder': {
					border: `solid 1px ${palette.other.border}`
				}
			}
		},
		MuiAvatar: {
			styleOverrides: {
				fallback: {
					height: '75%',
					width: '75%'
				}
			}
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					marginBottom: '0',
					'.MuiAccordionSummary-content': {
						margin: 0,
						display: 'block'
					}
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: typography.fontWeightSemiBold,
					fontSize: typography.button.fontSize,
					padding: '8px 20px',
					textTransform: 'none',
					boxShadow: 'none',
					borderRadius: '64px',
					'&:hover': {
						backgroundColor: palette.primary.dark
					},
					'&:hover,&:active,&:focus': {
						boxShadow: 'none'
					}
				},
				outlined: {
					color: palette.primary.main,
					border: `solid 1px ${palette.primary.states.border}`,
					backgroundColor: palette.grey.white,
					'&:hover': {
						backgroundColor: palette.action.selected,
						color: palette.primary.main,
						border: `solid 1px ${palette.primary.states.border}`
					}
				},
				outlinedError: {
					color: palette.error.main,
					border: `solid 1px ${palette.error.lightestBg}`,
					backgroundColor: palette.error.lightestBg,
					'&:hover': {
						color: palette.error.main,
						border: `solid 1px ${palette.error.lightBg}`,
						backgroundColor: palette.error.lightBg
					}
				},
				containedError: {
					backgroundColor: palette.error.lightestBg,
					color: palette.error.main,
					'&:hover': {
						backgroundColor: palette.error.lightBg
					}
				},
				text: {
					border: `1px solid transparent`,
					'&:hover': {
						backgroundColor: palette.action.selected,
						color: palette.primary.main,
						border: `solid 1px ${palette.primary.states.border}`
					}
				}
			}
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					border: 'none'
				}
			}
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					padding: '12px 16px',
					margin: 0
				}
			},
			defaultProps: {
				titleTypographyProps: {
					variant: 'h2'
				}
			}
		},
		MuiCardActions: {
			styleOverrides: {
				root: {
					backgroundColor: palette.grey[100],
					justifyContent: 'end'
				}
			}
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					borderRadius: 3,
					overflow: 'hidden'
				}
			}
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					minWidth: 'auto',
					marginRight: '16px'
				}
			}
		},
		MuiList: {
			styleOverrides: {
				root: {
					fontSize: '0.875rem'
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
					boxShadow: 'none'
				}
			}
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					marginLeft: -3,
					background: '#fff',
					padding: '0 7px 0 6px'
				}
			}
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					'&$error': {
						color: '#f44336'
					}
				}
			}
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					'&.Mui-focusVisible': {
						outlineColor: palette.primary.main,
						outlineOffset: 1
					}
				}
			}
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: palette.primary.main,
					textDecoration: 'underline',
					'&:hover': {
						textDecoration: 'none'
					}
				}
			}
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					minHeight: '64px',
					zindex: '1300',
					backgroundColor: palette.text.primary
				}
			}
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					boxShadow: 'none'
				}
			}
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					fontWeight: typography.fontWeightBold
				}
			}
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottom: `1px solid ${palette.other.border}`
				}
			}
		},
		MuiTableSortLabel: {
			styleOverrides: {
				root: {
					border: `1px solid transparent`,
					borderRadius: '5px',
					paddingLeft: 9,
					marginLeft: -9,
					'&:focus': {
						border: `1px solid ${palette.primary.main}`,
						outline: `1px solid ${palette.primary.main}4d`,
						svg: {
							opacity: 0.5
						}
					}
				}
			}
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: palette.other.border
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
					fontWeight: typography.fontWeightBold
				}
			}
		},
		MuiStepIcon: {
			styleOverrides: {
				root: {
					// fill: 'red'
				}
			}
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					border: `1px solid ${palette.other.border}`
				}
			}
		}
	}
};

export const createCustomTheme = (config: ThemeConfig = {}): Theme => {
	let theme = createTheme(
		merge(
			{
				typography: {
					fontFamily: ['"Open Sans"', 'sans-serif'].join(',')
				}
			},
			baseOptions,
			{
				...(config.roundedCorners && {
					shape: {
						borderRadius: 16
					}
				})
			},
			{
				direction: config.direction
			}
		)
	);

	theme = createTheme(theme, {
		palette: { ...ColorPalette(theme) },
		components: { ...Components(theme) },
		typography: { ...Typography(theme) }
	});

	return theme;
};
