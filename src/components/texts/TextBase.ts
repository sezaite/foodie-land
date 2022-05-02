import styled from 'styled-components/macro';
import { Colors } from 'styles/theme';
import { theme } from 'styles/theme';

interface TextBaseProps {
    margin?: string;
    fontSize?: string;
    fontWeight?: number;
    color?: Colors;
    textAlign?: string;
    textDecoration?: string;
    textTransform?: string;
}

export const TextBase = styled.p<TextBaseProps>`
	margin: ${({ margin }) => margin || ''};
	font-size: ${({ fontSize }) => fontSize || ''};
	font-weight: ${({ fontWeight }) => fontWeight || 400};
	color: ${({ color }) => color || theme.colors.white};
	text-align: ${({ textAlign }) => textAlign || ''};
	text-decoration: ${({ textDecoration }) => textDecoration || ''};
	text-transform: ${({ textTransform }) => textTransform || ''};
`;