
var i = 0;
var time = 2500;

//For first slider
var images1 = [];
// Images list
images1[0] = '../images/References/inspiration.jpg';
images1[1] = '../images/References/home_ref.png';
images1[2] = '../images/References/implementation.jpg';
images1[3] = '../images/References/home_res.png';

//For second slider
var images2 = [];
// Images list
images2[0] = '../images/References/inspiration.jpg';
images2[1] = '../images/References/products_ref.png';
images2[2] = '../images/References/implementation.jpg';
images2[3] = '../images/References/products_res.png';

//For third slider
var images3 = [];
// Images list
images3[0] = '../images/References/inspiration.jpg';
images3[1] = '../images/References/contact_ref.png';
images3[2] = '../images/References/implementation.jpg';
images3[3] = '../images/References/contact_res.png';

//For fourth slider
var images4 = [];
// Images list
images4[0] = '../images/References/inspiration.jpg';
images4[1] = '../images/References/form_ref.png';
images4[2] = '../images/References/implementation.jpg';
images4[3] = '../images/References/form_res.png';

//For fifth slider
var images5 = [];
// Images list
images5[0] = '../images/References/inspiration.jpg';
images5[1] = '../images/References/blog_ref.png';
images5[2] = '../images/References/implementation.jpg';
images5[3] = '../images/References/blog_res.png';

//Creating a function
function changeImg()
{
	document.slide1.src = images1[i];
	document.slide2.src = images2[i];
	document.slide3.src = images3[i];
	document.slide4.src = images4[i];
	document.slide5.src = images5[i];

	if (i < 3) 
	{
		i++;
	}
	else
	{
	i = 0;
	}
	setTimeout('changeImg()', time);
	}
window.onload = changeImg; 

