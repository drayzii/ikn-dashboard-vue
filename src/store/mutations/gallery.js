export default {
  isSaving(state, value) {
    state.isSaving = value;
  },
  addImagesToState(state, value) {
    state.images = [...value.data, ...state.images];
  },
  removeImagesfromState(state, value) {
    state.images = state.images.filter(image => image.id !== value);
  },
};
