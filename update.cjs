const { Client } = require('@notionhq/client');
const fs = require("fs");
// require("dotenv").config();

const { NOTION_TOKEN, NOTION_DB_COMPETENCES, NOTION_DB_PROJECTS } = process.env;
const notion = new Client({ auth: NOTION_TOKEN });

(async () => {
  let res = await notion.databases.query({ database_id: NOTION_DB_COMPETENCES });
  let data = res.results.map((c) => {
    return { name: c.properties["Nom"].title[0].text.content, percent: c.properties["Notation"].number }
  })
  fs.writeFileSync("competences.json", JSON.stringify(data.reverse(), null, 2));

  let resp = await notion.databases.query({ database_id: NOTION_DB_PROJECTS });
  let data2 = resp.results.map((c) => {
    return {
      name: c.properties["Nom"].title[0].text.content,
      description: c.properties["Description"].rich_text[0].text.content,
      link: c.properties["Lien"].url,
      image: c.properties["Logo"].url
    }
  });
  fs.writeFileSync("projects.json", JSON.stringify(data2.reverse(), null, 2));
})();