"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
  projectRoot: "./src",
  projectName: "angular-netlify-starter",
  outDir: "./dist/static",
  routes: {
    "/blog/:title": {
      type: "contentFolder",
      title: {
        folder: "./blog",
      },
    },
  },
};
