import styled from 'styled-components/macro';
import { mobile, useQuery } from 'styles/breakpoints';
import { theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';
import { Colors } from 'styles/theme';

interface SectionWrapperStyles {
	minHeight?: string;
	backgroundColor?: Colors;
}


export const SectionWrapper = styled.section<SectionWrapperStyles>`
	padding: ${theme.space.s64};
	position: relative;
	min-height: ${({ minHeight }) => minHeight || ''};
	background-color: ${({ backgroundColor, theme }) =>
		backgroundColor ? theme.colors[backgroundColor] : ''};
		
		@media ${tablet} {
			padding: ${theme.space.s48};
		}
	
`;