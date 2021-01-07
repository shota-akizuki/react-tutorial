const LANGUAGES = ["JavaScript", "Dart", "TypeScript", "Kotlin", "Swift"];

export const getLanguages = () => {
  //1秒かけてLANGUAGESを取るという関数
  //1秒後にデータをresolveする
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
};

export default LANGUAGES;
