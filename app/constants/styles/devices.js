const sizes = {
  height: {
    desktopPlus: 900,
    tabletPlus: 1366,
    tablet: 1024
  },
  width: {
    desktopPlus: 1440,
    tabletPlus: 1024,
    tablet: 768,
    mobile: 415,
    mobileSmall: 350
  }
};

export default {
  height: {
    desktopPlus: `(min-height: ${sizes.height.desktopPlus}px)`,
    tabletPlus: `(min-height: ${sizes.height.tabletPlus}px)`,
    tablet: `(min-height: ${sizes.height.tablet}px)`
  },
  width: {
    desktopPlus: `(min-width: ${sizes.width.desktopPlus}px)`,
    tabletPlus: `(max-width: ${sizes.width.tabletPlus}px)`,
    tablet: `(max-width: ${sizes.width.tablet}px)`,
    mobile: `(max-width: ${sizes.width.mobile}px)`,
    mobileSmall: `(max-width: ${sizes.width.mobileSmall}px)`
  }
};
