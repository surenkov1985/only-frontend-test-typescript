const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/auth.routes");
const config = require("config");
const cors = require("cors");
const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};

const app = express();

const PORT = config.get("port") || 5000;

app.use(express.json({ extended: true }));

app.use(cors(corsOptions));

app.use("/api/auth", router);

async function start() {
	try {
		await mongoose.connect(config.get("mongoUri"));
		app.listen(PORT, () => console.log(`HELLO in port ${PORT}`));
	} catch (e) {
		console.log(e.message);
		process.exit(1);
	}
}

start();
