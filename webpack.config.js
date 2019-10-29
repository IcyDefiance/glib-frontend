const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = env => {
	const analyze = env && env.analyze;
	const prod = env && env.prod;
	const mode = prod ? "production" : "development";
	const analyzerPlugin = analyze ? [new BundleAnalyzerPlugin()] : [];
	return [
		{
			mode,
			entry: "./src/electron.ts",
			target: "electron-main",
			devtool: "source-map",
			module: { rules: [{ test: /\.ts$/, include: /src/, use: [{ loader: "ts-loader" }] }] },
			output: { path: __dirname + "/dist", filename: "electron.js" },
			node: { __dirname: false },
		},
		{
			mode,
			entry: "./src/react.tsx",
			target: "electron-renderer",
			devtool: "source-map",
			module: {
				rules: [
					{
						test: /\.tsx?$/,
						include: /src/,
						use: [
							{ loader: "babel-loader", options: { plugins: ["babel-plugin-styled-components"] } },
							"ts-loader",
						],
					},
					{
						test: /\.scss$/,
						use: [
							MiniCssExtractPlugin.loader,
							"css-loader",
							{ loader: "sass-loader", options: { sassOptions: { includePaths: ["node_modules"] } } },
						],
					},
				],
			},
			output: { path: __dirname + "/dist", filename: "main.js" },
			resolve: { extensions: [".ts", ".tsx", ".js"], plugins: [new TsconfigPathsPlugin()] },
			plugins: [
				...analyzerPlugin,
				new HtmlWebpackPlugin({ template: "./src/index.html" }),
				new MiniCssExtractPlugin({
					// Options similar to the same options in webpackOptions.output
					// all options are optional
					filename: "[name].css",
					chunkFilename: "[id].css",
					ignoreOrder: false, // Enable to remove warnings about conflicting order
				}),
			],
		},
	];
};
