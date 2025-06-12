/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_YKSFl0O5zNkt@ep-small-lake-a8h6b87v-pooler.eastus2.azure.neon.tech/AI-Content_Generator?sslmode=require'
    }
  };
  