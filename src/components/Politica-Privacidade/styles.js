import { styled, keyframes } from "../../configs/stiches";

const slideUp = keyframes({
  from: { bottom: -150 },
  to: { bottom: 10 },
});

const slideDown = keyframes({
  from: { bottom: 10 },
  to: { bottom: -150 },
});

export const WrapperPolitica = styled("div", {
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  backgroundColor: "$white",
  margin: "1.25rem",
  display: "flex",
  position: "fixed",
  bottom: 3,
  height: "auto",
  border: "1px solid rgba(199, 199, 199, 0.4) !important",
  boxShadow: "0px 3px 4px rgba(199, 199, 199, 0.4) ",
  borderRadius: "0.9375rem",
  transition: "250ms ease-in",
  "-webkit-animation": `${slideUp} 250ms cubic-bezier(0.87, 0, 0.13, 1)`,
  animation: `${slideUp} 250ms cubic-bezier(0.87, 0, 0.13, 1)`,
  "@lg": {
    marginLeft: "0.9375rem",
    width: "98%",
    bottom: 1,
    margin: "0.9rem",
  },

  variants: {
    visible: {
      false: {
        visibility: "hidden",
        opacity: 0,
        transition: "250ms ease-out",
        "-webkit-animation": `${slideDown} 250ms cubic-bezier(0.87, 0, 0.13, 1)`,
        animation: `${slideDown} 250ms cubic-bezier(0.87, 0, 0.13, 1)`,
      },
    },
  },
});

export const WrapperContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "open sans, sans-serif",
  fontSize: "0.625rem",
  fontWeight: "500",
  margin: "1rem",
  "@lg": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export const ButtonStyled = styled("button", {
  //Reset Css Button
  border: "none",
  font: "inherit",

  //Css Button
  color: "$white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "open sans, sans-serif",
  fontSize: "1rem",
  fontWeight: "normal",
  padding: "1rem 0",
  width: "7.5rem",
  margin: "0 auto",
  borderRadius: "0.25rem",
  outline: "none",
  marginTop: "0.625rem",
  backgroundColor: "$primary_100",
  "@lg": {
    marginLeft: "1.25rem",
    marginBottom: "0.625rem",
    display: "flex",
    flexDirection: "row",
    width: "10rem",
  },
});

export const H1Styled = styled("span", {
  width: "100%",
  fontSize: "1rem",
  color: "#2c3131",
  fontWeight: 500,
});

export const AStyled = styled("a", {
  textDecoration: "none",
  color: "$info_100",
});
