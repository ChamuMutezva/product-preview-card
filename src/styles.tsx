import { css } from '@emotion/css'

export const imageStyles = css(`
display: block;
object-fit: cover;
max-width: 100%
`)
export const appStyles = css(`
background-color: hsla(28, 38%, 92%, 1);
font-family: 'Montserrat', sans-serif;
font-size: 0.75rem;
min-height: 100vh;  
display: flex;  
align-items: center;
`)
export const mainContainerStyles = {
    paddingBlock: '1.75rem',
    paddingInline: {
        xs: '1.75rem',
        lg: 0
    },
    maxWidth: { xs: '37.5rem' },
}
export const h1Styles = {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    lineHeight: 1.3,
    letterSpacing: '5px',
    fontWeight: 500,
    color: 'hsla(228, 12%, 48%, 1)',
    fontFamily: "'Montserrat', sans-serif",
    marginBlock: '.75rem'
}
export const h2Styles = {
    color: 'hsla(212, 21%, 14%, 1)',
    lineHeight: 1,
    fontWeight: 700,
    fontFamily: "'Fraunces', serif",
    fontSize: '2rem'
}
export const mainTextStyles = {
    fontSize: '0.875rem',
    fontFamily: "'Montserrat', sans-serif",
    color: '#6C7289',
}
export const buttonStyle = {
    width: '100%',
    backgroundColor: 'hsla(157, 36%, 37%, 1)',
    fontWeight: 700,
    fontSize: '0.875rem',
    paddingBlock: '.75rem',
    borderRadius: '8px',
    textTransform: 'capitalize'
}
export const discountedCostStyles = {
    fontFamily: "'Fraunces', serif",
    fontSize: '2rem',
    fontWeight: 700,
    color: '#3D8168',
}
export const glossCostStyles = {
    textDecoration: 'line-through',
    color: '#6C7289',
    fontSize: '0.8125rem',
    marginInlineStart: '1rem',
    lineHeight: '1.8'
}