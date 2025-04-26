const paths = [
  "src/index.js",
  "src/utils/helpers.js",
  "src/components/button.js",
  "test/index.test.js",
  "README.md"
];
/* {
  src: {
    "index.js": null,
    utils: {
      "helpers.js": null
    },
    components: {
      "button.js": null
    }
  },
  test: {
    "index.test.js": null
  },
  "README.md": null
} */

function folderStructure(paths) {
  const result = {};

  for (const path of paths) {
    const parts = path.split('/');
    /* acts as a pointer to the level of the object  */
    let current = result;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      // If it's the last part, it's a file
      if (i === parts.length - 1) {
        current[part] = null;
      } else {
        // Otherwise it's a folder
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    }
  }

  return result;
}


console.log(folderStructure(paths))