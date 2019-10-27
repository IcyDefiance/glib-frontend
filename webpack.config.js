const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = env => {
	const prod = env && env.prod;
	const mode = prod ? "production" : "development";
	const optimization = prod ? { minimizer: [new TerserPlugin({})] } : undefined;
	return [
		{
			mode,
			entry: "./src/electron.ts",
			target: "electron-main",
			devtool: "source-map",
			module: { rules: [{ test: /\.ts$/, include: /src/, use: [{ loader: "ts-loader" }] }] },
			output: { path: __dirname + "/dist", filename: "electron.js" },
			node: { __dirname: false },
			optimization
		},
		{
			mode,
			entry: "./src/react.tsx",
			target: "electron-renderer",
			devtool: "source-map",
			module: {
				rules: [
					{ test: /\.tsx?$/, include: /src/, use: [{ loader: "ts-loader" }] },
					{
						test: /\.scss$/,
						use: [
							"style-loader",
							"css-loader",
							{ loader: "sass-loader", options: { sassOptions: { includePaths: ["node_modules"] } } }
						]
					}
				]
			},
			output: { path: __dirname + "/dist", filename: "main.js" },
			resolve: { extensions: [".ts", ".tsx", ".js"], plugins: [new TsconfigPathsPlugin()] },
			plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
			optimization
		}
	];
};
