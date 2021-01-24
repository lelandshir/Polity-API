const jsonServer = require("json-server");
const app = jsonServer.create();
const db = jsonServer.router("db.json");
const PORT = process.env.PORT || 3000;

app.use(jsonServer.defaults());
app.use(db);

app.listen(PORT, () => {
	console.log("In the name of better records!");
});
