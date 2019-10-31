const currentColor = "currentColor";
const none = "none";

export const miDatabasePlus: IconDefinition = {
	paths: [
		{
			path:
				"M18,14H20V17H23V19H20V22H18V19H15V17H18V14M12,3C16.42,3 20,4.79 20,7C20,9.21 16.42,11 12,11C7.58," +
				"11 4,9.21 4,7C4,4.79 7.58,3 12,3M4,9C4,11.21 7.58,13 12,13C16.42,13 20,11.21 20,9V9L20,12.08L19," +
				"12C16.41,12 14.2,13.64 13.36,15.94L12,16C7.58,16 4,14.21 4,12V9M4,14C4,16.21 7.58,18 12,18H13C13," +
				"19.05 13.27,20.04 13.75,20.9L12,21C7.58,21 4,19.21 4,17V14Z",
			fill: currentColor,
		},
	],
};
export const miDelete: IconDefinition = {
	paths: [
		{
			path: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",
			fill: currentColor,
		},
	],
};
export const miInformation: IconDefinition = {
	paths: [
		{
			path:
				"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
			fill: currentColor,
		},
	],
};
export const miClose: IconDefinition = {
	paths: [
		{
			path:
				"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
			fill: currentColor,
		},
	],
};
export const miMaximize: IconDefinition = {
	paths: [{ path: "M0 0h24v24H0V0z", fill: none }, { path: "M3 3h18v2H3V3z", fill: currentColor }],
};
export const miMinimize: IconDefinition = {
	paths: [{ path: "M0 0h24v24H0V0z", fill: none }, { path: "M6 19h12v2H6v-2z", fill: currentColor }],
};

export interface IconDefinition {
	paths: {
		path: string;
		fill: string;
	}[];
}
