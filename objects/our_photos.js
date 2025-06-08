
const imageModules = import.meta.glob('../src/assets/images/our_photos/*.{png,jpg,jpeg,svg}', { eager: true });

export const imagesArray = Object.entries(imageModules).map(([path, module]) => {
  const img_src = module.default;
  return {
    img_src,
    bottom_text: ''
  };
});

