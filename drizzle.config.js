/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://mock_owner:zn4rGcwIs7yS@ep-noisy-credit-a19d6qvq.ap-southeast-1.aws.neon.tech/mock?sslmode=require',
    }
  };