import html2canvas from 'html2canvas';

const downloadImage = async (blob: string, fileName: string) => {
	const fakeLink = window.document.createElement('a');
	// @ts-ignore
	fakeLink.style = 'display:none;';
	fakeLink.download = fileName;

	fakeLink.href = blob;

	document.body.appendChild(fakeLink);
	fakeLink.click();
	document.body.removeChild(fakeLink);

	fakeLink.remove();
};

const saveImageToClipboard = async (blob: string, fileName: string) => {
	const fakeLink = window.document.createElement('a');
	// @ts-ignore
	fakeLink.style = 'display:none;';
	fakeLink.download = fileName;

	fakeLink.href = blob;

	const image = await fetch(blob!);
	const imageBlob = await image.blob();

	await navigator.clipboard.write([
		new ClipboardItem({
			'image/png': imageBlob,
		}),
	]);

	fakeLink.remove();
};

const exportAsImage = async (element: HTMLElement, imageFileName: string, saveToClipboard?: boolean) => {
	if (!element) return;
	const canvas = await html2canvas(element);
	const image = canvas.toDataURL('image/png', 1.0);
	if (saveToClipboard) saveImageToClipboard(image, imageFileName);
	else downloadImage(image, imageFileName);
};

export default exportAsImage;
