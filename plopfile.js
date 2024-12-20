// --------------------------------------------
//
// plopfile.js
// -> Controller that automatically stubs-out
//    component and pattern files
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

const plopFunction = function (plop) {
  plop.setGenerator("component", {
    description: "Generate a new component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Where do you want to place the new component?",
        choices: ["components"],
      },
      {
        type: "input",
        name: "name",
        message: function (answers) {
          return `Enter the name of the ${answers.type.slice(0, -1)}:`;
        },
      },
    ],
    actions: function (data) {
      let basePath;
      switch (data.type) {
        case "components":
          basePath = "src/components";
          break;
      }

      const allFiles = [
        {
          type: "add",
          path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: "templates/Component.tsx.hbs",
        },
        {
          type: "add",
          path: `${basePath}/{{pascalCase name}}/index.ts`,
          templateFile: "templates/index.ts.hbs",
        },
        {
          type: "add",
          path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
          templateFile: "templates/Component.stories.tsx.hbs",
        },
        {
          type: "add",
          path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
          templateFile: "templates/Component.test.tsx.hbs",
        },
      ];

      if (data.type === "pattern") {
        return allFiles;
      } else {
        return allFiles.concat([
          {
            type: "add",
            path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.module.css`,
            templateFile: "templates/Component.module.css.hbs",
          },
        ]);
      }
    },
  });
};

module.exports = plopFunction;
