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
	for (var j = 0; j < one.children.length; j++)
	{
		one.children[j].style.width = width.low + "vmax";
		one.children[j].style.height = width.low + "vmax";
	}
	one.children[i].style.width = width.high + "vmax";
	one.children[i].style.height = width.high + "vmax";
}

function	launch_focus_f(i)
{
	return function()
	{
		focus_img(i);
		console.log(i);
	}
};



function	reset_img()
{
	for (var j = 0; j < one.children.length; j++)
	{
		one.children[j].style.width = width.init + "vmax";
		one.children[j].style.height = width.init + "vmax";
	}
}

function	yolo()
{
	alert('yolo');
}

	var i;
	for (i = 0; i < one.children.length; i++)
	{
		// one.children[i].onclick = launch_focus_f(i);
		one.children[i].addEventListener("mouseover", launch_focus_f(i), true);
	}
	window.addEventListener("mouseover", reset_img, true);
