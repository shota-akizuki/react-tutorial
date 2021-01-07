const LANGUAGES = ["JavaScript", "Dart", "TypeScript", "Swift", "Kotlin"];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
};

export default LANGUAGES;
