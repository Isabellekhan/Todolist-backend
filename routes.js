/** @format */

function initRoutes(app, db) {
	app.get("/", handleGetRoot(db));

	app.get(
		"/todos",
		(request, response) => {}
	);
}

const handleGetRoot = (db) => {
	return (request, response) => {
		response.json({
			info: "Node.js, Express, and Postgres API",
		});
	};
};

module.exports = { initRoutes };
