import { column, defineTable, defineDb } from "astro:db";

const Season = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    number: column.number(),
    year: column.number(),
  },
});

const Episode = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    seasonId: column.number({ references: () => Season.columns.id }),
    number: column.number(),
    title: column.text(),
    duration: column.number(),
  },
});

const Brand = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    primaryColor: column.text(),
    secondaryColor: column.text(),
    logo: column.text(),
  },
});

const Collab = defineTable({
  columns: {
    // id: column.number({ primaryKey: true }),
    episodeId: column.number({ references: () => Episode.columns.id }),
    brandId: column.number({ references: () => Brand.columns.id }),
    description: column.text(),
    timestamp: column.number(),
    duration: column.number(),
    type: column.text(),
  },
});

export default defineDb({
  tables: {
    Season,
    Episode,
    Brand,
    Collab,
  },
});
