const path = require("path");

module.exports = {
  ignore: ["**/components/**/*.test.js", "**/components/**/index.js"],
  usageMode: "expand",
  require: [path.join(__dirname, "./src/dotgov.scss")],
  styleguideDir: "public",
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: "Foundation",
      content: "src/docs/Foundation.md",
      sections: [
        {
          name: "Colors",
          content: "src/components/foundation/Colors.md"
        },
        {
          name: "Grid",
          content: "src/components/foundation/Grid.md"
        },
        {
          name: "Typography",
          content: "src/components/foundation/Typography.md"
        }
      ]
    },
    {
      name: "Components",
      content: "src/docs/Components.md",
      components: "src/components/basic/**/*.js",
      ignore: [
        "src/components/basic/table/TableHead.js",
        "src/components/basic/table/TableBody.js",
        "src/components/basic/table/TableCell.js",
        "src/components/basic/table/TableHeadCell.js",
        "src/components/basic/table/TableRow.js"
      ]
    },
    {
      name: "Template Elements",
      content: "src/docs/TemplateElements.md",
      components: "src/components/template/**/*.js"
    },
    {
      name: "Site Elements",
      content: "src/docs/SiteElements.md",
      components: "src/components/site/**/*.js"
    }
  ],
  template: {
    head: {
      scripts: [
        {
          src: "https://kit.fontawesome.com/2475edd293.js"
        },
        {
          src: "http://baltimorecountymd.gov/sebin/t/i/dotgov-accordion.min.js"
        },
        {
          src:
            "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        }
      ]
    }
  }
};
