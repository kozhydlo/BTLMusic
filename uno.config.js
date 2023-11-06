import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
	presets: [presetUno(), presetIcons()],
	theme: {
		colors: {
			one: "#344376",
			two: "#3F4F84",
			three: "#615E9A",
			four: "#D9D9D9",
		},
	},
	shortcuts: [
		{
			music:
				"w-75 h-75 rounded-full border-10px border-style-solid border-dark flex items-center justify-center bg-cover bg-center brightness-50 hover:brightness-100",
			"music-text": "w-90% text-center overflow-hidden",
		},
		{
			"menu-items": "my-2 ml-3 cursor-pointer hover:text-dark duration-200",
		},
		{
			"settingsTheme": "flex items-center gap-10 border-dark border-style-solid border-b-2px pb-2",
		},
		[
			/^icons-hover-(.*)$/,
			([, icon]) =>
				`i-heroicons-${icon} hover:i-heroicons-${icon}-solid cursor-pointer`,
		],
	],
	rules: [
		[
			"text-hit",
			{
				"text-shadow":
					"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
			},
		],
	],
});
