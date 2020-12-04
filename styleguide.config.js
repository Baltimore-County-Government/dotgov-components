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
          content: "src/components/foundation/Colors.md",
        },
        {
          name: "Grid",
          content: "src/components/foundation/Grid.md",
        },
        {
          name: "Typography",
          content: "src/components/foundation/Typography.md",
        },
      ],
    },
    {
      name: "Components",
      content: "src/docs/Components.md",
      components: "src/components/basic/**/*.js",
      sections: [
        {
          name: "Modal",
          content: "src/components/basic/Modal.md",
        },
      ],
      ignore: [
        "src/components/basic/table/TableHead.js",
        "src/components/basic/table/TableBody.js",
        "src/components/basic/table/TableCell.js",
        "src/components/basic/table/TableHeadCell.js",
        "src/components/basic/table/TableRow.js",
      ],
    },
    {
      name: "Template Elements",
      content: "src/docs/TemplateElements.md",
      components: "src/components/template/**/*.js",
    },
    {
      name: "Site Elements",
      content: "src/docs/SiteElements.md",
      components: "src/components/site/**/*.js",
      sections: [
        {
          name: "Images",
          content: "src/components/site/Images.md",
        },
        {
          name: "Page Content",
          content: "src/components/site/PageContent.md",
        },
      ],
    },
  ],
  template: {
    head: {
      scripts: [
        {
          src: "https://kit.fontawesome.com/2475edd293.js",
        },
        {
          src:
            "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js",
        },
        {
          // Replaced prod link with dev link to be able to test changes to dotgov-site.min.js
          //src: "//baltimorecountymd.gov/sebin/z/l/dotgov-site.min.js"
          src: "//dev.baltimorecountymd.gov/sebin/z/m/dotgov-site.min.js",
        },
        {
          src: "//dev.baltimorecountymd.gov/sebin/d/k/jquery.dataTables.min.js",
        },
        {
          src: "//dev.baltimorecountymd.gov/sebin/f/h/dataTables.responsive.js",
        },
      ],
    },
  },
};
