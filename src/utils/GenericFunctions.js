export const showToast = (context, variant, title, description) => {
  context.$bvToast.toast(description, {
    title,
    variant,
    solid: true,
    autoHideDelay: 1000,
    noHoverPause: true,
    // toaster: 'b-toaster-bottom-right',
    headerClass: 'd-none'
  });
};
