var numOfSq = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var displayColor = document.querySelector("#colorMsg");
var headDisplay = document.querySelector("#headContainer");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init()
{
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			console.log(this.textContent);
			this.textContent === "Easy" ? numOfSq = 3 : numOfSq = 6;
			reset();
		})
	}
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].addEventListener("click", function()
			{
				var clickedColor = this.style.backgroundColor;
				if(clickedColor === pickedColor)
				{
					messageDisplay.textContent = "You Win!";
					changeColors(clickedColor);
					headDisplay.style.backgroundColor = clickedColor;
					resetButton.textContent = "Play Again ?";
				}
				else
				{
					this.style.backgroundColor = "#242424";
					messageDisplay.textContent = "Give it Another Go";
				}
			});
	}
	reset();
}

function reset()
{
	resetButton.textContent = "New Colors";
	colors = generateRandomColors(numOfSq);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	messageDisplay.textContent = "";
	headDisplay.style.backgroundColor = "#00db74";

	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click",function()
{ reset()
});

function changeColors(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}
function pickColor()
{
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}
function generateRandomColors(size)
{
	var tempColors = [];
	for(var i = 0; i< size; i++)
	{
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);

		tempColors[i] = "rgb(" + red +", " + green+ ", " + blue+")";
	}
	return tempColors;
}