export default (color, direction) => {
  const colorCode = typeof color === "object" ? color[0] : color;

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? `0${hex}` : hex;
  }

  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }

  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  if (direction === "hex") {
    const split = colorCode.split(" ");
    const hex = rgbToHex(split[0], split[1], split[2]);
    return hex;
  }

  if (direction === "rgb") {
    const { r, g, b } = hexToRgb(colorCode);
    return `${r}, ${g}, ${b}`;
  }
};
