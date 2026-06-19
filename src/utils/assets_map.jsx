const getAllFilePathsFromFolder = async (folderName) => {
  // In Vite, we use import.meta.glob to read files from the file system
  const modules = import.meta.glob('../*/**/*.{png,jpg,jpeg,svg,gif,webp}');

  const files = [];
  for (const path in modules) {
    if (path.includes(`/${folderName}/`)) {
      const module = await modules[path]();
      files.push(module.default);
    }
  }

  return files;
};

export default getAllFilePathsFromFolder;