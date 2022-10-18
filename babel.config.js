/* eslint-disable func-names */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-react"],
    plugins: [
      [
        "babel-plugin-styled-components",
        { ssr: true, displayName: true, pure: true },
      ],
    ],
  };
};
