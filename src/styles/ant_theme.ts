const themeConfig = {
  components: {
    Breadcrumb: {
      linkHoverColor: "var(--accent)",
      linkColor: "var(--text-color)",
      itemColor: "#707070",
      separatorColor: "var(--accent)",
    },
    Divider: {
      colorSplit: "var(--summary_border)",
      fontSizeLG: 14,
    },
    Slider: {
      handleColor: "var(--accent)",
      handleActiveColor: "var(--accent)",
      trackBg: "var(--links_border)",
      trackHoverBg: "var(--accent)",
    },
    Modal: {
      contentBg: "var(--content-background-color)",
      titleColor: "var(--text-color)",
      headerBg: "transparent",
    },
  },
  token: {
    colorBgElevated: "var(--content-background-color)",
    fontFamily: "Inter, sans-serif",
    colorText: "var(--text-color)",
  },
};

export default themeConfig;
