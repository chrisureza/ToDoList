export const showToast = (context, variant, title, description) => {
  context.$bvToast.toast(description, {
    title,
    variant,
    solid: true,
    autoHideDelay: 2000
  });
};
