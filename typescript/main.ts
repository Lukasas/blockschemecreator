const canvas = <HTMLCanvasElement>document.getElementById("drawing_board");
const context = canvas.getContext("2d");

let previous = 0;
const desiredFPS = 1000.0;
const holder = 1000.0 / desiredFPS;
function renderer(Timestamp)
{
	let now = Timestamp;
	let diff = now - previous;
	if (diff >= holder)
	{
		context.beginPath();
		on_draw(diff);
		context.closePath();
		previous = now;
	}
	requestAnimationFrame(renderer);
}
requestAnimationFrame(renderer);

function on_draw(time_diff : number)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.strokeText((1000/time_diff).toString(), 10, 10);
}