import { saveAs } from "file-saver";

export function saveFile(name, value) {
	saveAs(
		new Blob([JSON.stringify(value, null, 4)], {
			type: "application/json;chareset=" + document.characterSet,
		}),
		`${name}.json`,
	);
}

export function readeFile(file) {
	if (!["application/json"].includes(file.type)) {
		alert("Нужен файл JSON");
	} else {
		return new Promise((reslove) => {
			const reader = new FileReader();
			reader.onloadend = () => reslove(JSON.parse(reader.result));
			reader.readAsText(file);
		});
	}
}
