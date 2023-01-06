import { styled, keyframes } from '../../configs/stiches'

const slideUp = keyframes({
  from: { bottom: -150 },
  to: { bottom: 10 },
})

const slideDown = keyframes({
  from: { bottom: 10 },
  to: { bottom: -150 },
})

export const WrapperPolitica = styled('div', {
    zIndex: 1000,
    backgroundColor: '$white',
    marginLeft: '0.9375rem',
    display: 'flex',
    position: 'fixed',
    bottom: 10,
    width: '98%',
    height: 'auto',
    border: '1px solid rgba(7, 59, 89, 0.4)',
    boxShadow: '0px 3px 4px rgba(7, 59, 89, 0.25)',
    borderRadius: '0.9375rem',
    transition: '250ms ease-in',
    '-webkit-animation': `${slideUp} 250ms cubic-bezier(0.87, 0, 0.13, 1)`,
    animation: `${slideUp} 250ms cubic-bezier(0.87, 0, 0.13, 1)`,

    variants: {
      visible: {
        false: {
            visibility: 'hidden',
            opacity: 0,
            transition: '250ms ease-out',
            '-webkit-animation': `${slideDown} 250ms cubic-bezier(0.87, 0, 0.13, 1)`,
            animation: `${slideDown} 250ms cubic-bezier(0.87, 0, 0.13, 1)`,
        },
      },
    },
})

export const WrapperContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "open sans, sans-serif",
    fontSize: '0.625rem',
    fontWeight: '700',
    margin: '1.25rem',
    '@lg': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
})

export const ButtonStyled = styled('button', {
    //Reset Css Button
    border: 'none',
    font: 'inherit',

    //Css Button
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "open sans, sans-serif",
    borderRadius: '0.5rem',
    height: '2.5181rem',
    fontSize: '0.875rem',
    width: '101%',
    marginTop: '10px',
    backgroundColor: '$primary_100',
    '@lg': {
        marginLeft: '20px',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        width: '10rem',
    },
})

export const H1Styled = styled('span', {
  width: '100%',
  fontSize: '16px',
  fontWeight: 700,
})

export const AStyled = styled('a', {
  textDecoration: 'none',
  color: '$info_100',
})
