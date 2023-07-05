export const colorMap = {
  light: "text-light",
  primary: "text-primary",
  dark: "text-dark",
  success: "text-success",
  danger: "text-danger",
  warning: "text-warning",
  info: "text-info",
}

export const sizeMap = {
  sm: "height: 1.3rem; width: 1.3rem",
  md: "height: 2.6rem; width: 2.6rem",
  lg: "height: 3.9rem; width: 3.9rem",
}

export const getSpinnerSize = value => {
  if (!value) return sizeMap["md"]

  return sizeMap[value]
}

export const getSpinnerColor = value => {
  if (!value) return colorMap["primary"]

  return colorMap[value]
}
