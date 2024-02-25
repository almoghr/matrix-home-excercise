
require('dotenv').config({ encoding: "utf8" });

const PORT = process.env.PORT || 4000;
const cookieSecret = process.env.COOKIE_SECRET || "myCookie";

module.exports={PORT, cookieSecret}