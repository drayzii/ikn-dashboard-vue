export default {
  availableImages: state => state.images.map(image => ({
    ...image,
    url: image.url.replace('upload', 'upload/q_60'),
  })),
  smallImages: state => state.images.map(image => ({
    ...image,
    url: image.url.replace('upload', 'upload/w_400,h_400,q_60'),
  })),
};
