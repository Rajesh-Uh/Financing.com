const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./config/db");

const categoryRoutes = require("./routes/categoryRoutes"); // fixed path
const categoryTypeRoutes = require("./routes/categoryTypeRoutes"); // fixed path
const incomeRoutes = require("./routes/incomeRoutes"); // fixed path
const expensesRoutes = require("./routes/expensesRoutes"); // fixed path
const models = require('./model'); // 🔥 import models so associations are registered

const app = express();
app.use(bodyParser.json());

app.use("/api/category", categoryRoutes);
app.use("/api/categoryType",categoryTypeRoutes);
app.use("/api/income",incomeRoutes);
app.use("/api/expenses",expensesRoutes); // added missing slash
// DB connection
sequelize.authenticate()
.then(() => {
sequelize.sync({ alter: true })
 .then(() => console.log("✅ All models synced"))
      .catch(err => console.error("❌ Sync error:", err));

    console.log("✅ Database connected...");
  })
  .catch(err => {
    console.error("❌ Error connecting to the database:", err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
