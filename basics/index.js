var prompt_mess = "Quel est votre nom s'il vous plait?";

function asking_name(prompt_mess)
{
	var name = prompt(prompt_mess, "...");
	if (name !== null && name !== "...")
	{
		alert("Salut " + name + " bienvenue !");
		document.title = "B A S I C S - " + name;
	}
	else
	{
		prompt_mess = "Veuillez renseigner un nom svp !";
		asking_name(prompt_mess);
	}
}



function	change_bgcolor(div_id, color)
{
	alert(div_id);
	div_id.style.backgroundColor = color;
}


var one = document.getElementById("middle_scroll");
var width = {
	low: 8,
	init: 10,
	high: 12
};


function	focus_img(i)
{
	var count_out = width.init;
	var fade_out = setInterval(function (){
		for (var j = 0; j < one.children.length; j++)
		{
			if (j !== i)
			{
				if (one.children[j].style.width !== "8vmax")
				{
					one.children[j].style.width = count_out + "vmax";
					one.children[j].style.height = count_out + "vmax";
					count_out -= 0.1;
				}
				if (count_out < width.low)
					clearInterval(fade_out);
			}
		}
	}, 10);//		time
	var count_in = width.init;
	var fade_in = setInterval(function (){
		if (one.children[i].style.width !== "12vmax")
		{
			one.children[i].style.width = count_in + "vmax";
			one.children[i].style.height= count_in + "vmax";
			count_in += 0.1;
		}
		if (count_in > width.high)
			clearInterval(fade_in);
	}, 10);//		time
}

function	launch_focus_f(i)
{
	return function()
	{
		focus_img(i);
		console.log(i);
	}
};


function	yolo()
{
	console.log("YOLO");
}

function	reset_img()
{
	// for (var j = 0; j < one.children.length; j++)
	// {
	// 	one.children[j].style.width = width.init + "vmax";
	// 	one.children[j].style.height = width.init + "vmax";
	// }
	yolo();
}


	var i;
	for (i = 0; i < one.children.length; i++)
		one.children[i].addEventListener("mouseover", launch_focus_f(i), true);
	one.addEventListener("mouseover", reset_img(), false);
	// window.addEventListener("mouseover", reset_img, true);
