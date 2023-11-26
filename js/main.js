$(document).ready(function() {


	// ANIMATE NAV
	/*
	var open = false;
	var navState = "nav";
	$("#nav").css('transform', 'RotateY(150deg)');
	
	if(navState == "nav")
	{
		$("#navicon").mouseenter(toggleNav);
		$("#nav").mouseenter(freezeNav);
		$("#nav").mouseleave(toggleNav);
	}
	
	function toggleNav()
	{
		if(open == false)
		{
			$("#nav").css('transform', 'RotateY(360deg)');
			$("#nav").css('transition', 'transform .75s cubic-bezier(0,.51,.23,.99)');
			open = true;
		}
		else
		{
			$("#nav").css('transform', 'RotateY(250deg)');
			$("#nav").css('transition', 'transform .5s ease-out');
			open = false;
		}
	}
	
	function closeNav()
	{
		$("#nav").css('transform', 'RotateY(250deg)');
		$("#nav").css('transition', 'transform .5s ease-out');
		open = false;
	}
	
	function freezeNav()
	{
		if(open == false)
		{
			open = false;
		}
		else
		{
			open = true;
		}
	}
	
	*/
	
	// BACKGROUND GRADIENT ANIMATION
	
	/*
	var stopPos = 10;
	var stopColor = '#485163';
	
	
	if(stopPos < 40)
	{
		stopPos++;
	}
	else
	{
		stopPos--;
	}
	*/
	//$("#wrapper").css('background', 'linear-gradient(45deg, #114 1%, #999 20%,  #333 60%)');
	//$("#wrapper").css('background', 'radial-gradient(ellipse at 0% 100%, #999 0%,'+stopColor+' '+stopPos+'%,#3a3a3a 100%,#333 100%)');
	//$("#wrapper").css('background-position', '-50% 150%');

	// TOGGLE SECTIONS
	/*
	var section = 0;
	
	//Microcontroller (IC) section
	$("#IC").click(function() {
		if(section == 1)
		{
			SendMessage('Main Camera', 'gotoSection', -1);
			section = -1;
			navIcon();
		}
		else
		{
			SendMessage('Main Camera', 'gotoSection', 1);
			section = 1;
			backIcon();
		}
	});
	
	//ICSP section
	$("#ICSP").click(function() {
		if(section == 2)
		{
			SendMessage('Main Camera', 'gotoSection', -2);
			section = -2;
			navIcon();
		}
		else
		{
			SendMessage('Main Camera', 'gotoSection', 2);
			section = 2;
			backIcon();
		}
	});
	
	//IO Pins section
	$("#Pins").click(function() {
		if(section == 3)
		{
			SendMessage('Main Camera', 'gotoSection', -3);
			section = -3;
			navIcon();
		}
		else
		{
			SendMessage('Main Camera', 'gotoSection', 3);
			section = 3;
			backIcon();
		}
	});
	
	//Power Port section
	$("#Power").click(function() {
		if(section == 4)
		{
			SendMessage('Main Camera', 'gotoSection', -4);
			section = -4;
			navIcon();
		}
		else
		{
			SendMessage('Main Camera', 'gotoSection', 4);
			section = 4;
			backIcon();
		}
	});
	
	//USB section
	$("#USB").click(function() {
		if(section == 5)
		{
			SendMessage('Main Camera', 'gotoSection', -5);
			section = -5;
			navIcon();
		}
		else
		{
			SendMessage('Main Camera', 'gotoSection', 5);
			section = 5;
			backIcon();
		}
	});	
		
	*/
		
		
	// LOGO/LOADING ANIMATION
	
	/* target #loading-text after animation finishes, apply animation to #arduino-text */
	$("#loading-text").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function()
	{
		$('#arduino-text').css("animation", "fadeIn 2s linear forwards");
		$('#nav').css('display', 'initial');	/* reveals the nav element */
	}); 
	
	/* target #arduino-text after animation finishes, animate logo moving into the corner, fade navHitbox out, wrap logo in <a> tag that links to the Arduino website */
	$("#arduino-text").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function()
	{
		$('#logo').css('animation', 'loadingToLogo 1s ease-in-out forwards');
		$('#navHitbox').css('animation', 'fadeOut 1s linear forwards');
	}); 
	
	/* targets logo after animation, animates interface elements in from the sides */
	$("#navHitbox").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function()
	{		
		function naviconIn()
		{
			$('#navicon').css('animation', 'pushLeft 1s ease-in-out forwards');
		}
		
		function shareIn()
		{
			$('#share').css('animation', 'pushRight 1s ease-in-out forwards');
		}
		
		function ctaIn()
		{
			$('#cta').css('animation', 'pushLeft 1s ease-in-out forwards');
		}
		
		$('header').css('animation', 'pushDown 1s ease-in-out forwards');
		window.setTimeout(naviconIn, 500);
		window.setTimeout(shareIn, 750);
		window.setTimeout(ctaIn, 1250);
	}); 
	
	/*
	
	/*if the section is 1-5*/
	
	/*
	
	function backIcon()
	{
		$("#top-bar").css("transform", "rotateZ(-45deg) translate(-16px, 6px) scale(.75,1)");
		$("#top-bar").css("transform-origin", "5px 8px");
		$("#top-bar").css("transition", "all .5s ease");
		
		$("#bottom-bar").css("transform", "rotateZ(45deg) translate(-16px, -6px) scale(.75,1)");
		$("#bottom-bar").css("transform-origin", "5px 42px");
		$("#bottom-bar").css("transition", "all .5s ease");
		navState = "back";
		console.log("navState: "+navState);
		closeNav();
	}
	
	function navIcon()
	{
		$("#top-bar").css("transform", "rotateZ(0deg)");
		$("#top-bar").css("transition", "all .5s ease");
		
		$("#bottom-bar").css("transform", "rotateZ(0deg)");
		$("#bottom-bar").css("transition", "all .5s ease");
		navState = "nav";
		console.log("navState: "+navState);
	}
	
	$("#navicon").click(function(){
		//closeNav();
		//SendMessage("Main Camera", "gotoSection", section);
	});
	
	*/
	
	
	
	
	
	
	
	
	
	
	
	/* SECTIONS
	
	1. IC (Microcontroller)
	2. ICSP
	3. IO Pins
	4. Power
	5. USB
	
	POSITIVE section values indicate ZOOM IN animation
	NEGATIVE section values indicate ZOOM OUT animation
	
	*/
	
	
	
	/* variables */
	navState = 'main';
	section = 0;
	
	
	/* functions */
	/*
	function toggleNav()
		{
			if(open == false)
			{
				$("#nav").css('transform', 'RotateY(360deg)');
				$("#nav").css('transition', 'transform .75s cubic-bezier(0,.51,.23,.99)');
				open = true;
			}
			else
			{
				$("#nav").css('transform', 'RotateY(250deg)');
				$("#nav").css('transition', 'transform .5s ease-out');
				open = false;
			}
		}
		*/
		function closeNav()
		{
			$("#nav").css('transform', 'RotateY(200deg)');
			$("#nav").css('transition', 'transform .5s ease-in');
			open = false;
		}
		
		function openNav()
		{
			$("#nav").css('transform', 'RotateY(360deg)');
			$("#nav").css('transition', 'transform .75s cubic-bezier(0,.51,.23,.99)');
			open = true;
			console.log('nav opened from function');
		}
	
		function freezeNav()	/* holds nav open when hovering off the navicon and onto the nav menu */
		{
			if(open == false)
			{
				open = false;
			}
			else
			{
				open = true;
			}
		}
	
		function naviconBackAnim()
		{
			$("#top-bar").css("transform", "rotateZ(-45deg) translate(-16px, 6px) scale(.75,1)");
			$("#top-bar").css("transform-origin", "5px 8px");
			$("#top-bar").css("transition", "all .5s ease");
			
			$("#bottom-bar").css("transform", "rotateZ(45deg) translate(-16px, -6px) scale(.75,1)");
			$("#bottom-bar").css("transform-origin", "5px 42px");
			$("#bottom-bar").css("transition", "all .5s ease");
		}
		
		function naviconMainAnim()
		{
			$("#top-bar").css("transform", "rotateZ(0deg)");
			$("#top-bar").css("transition", "all .5s ease");
			
			$("#bottom-bar").css("transform", "rotateZ(0deg)");
			$("#bottom-bar").css("transition", "all .5s ease");
		}
			
	
	/* nav controller */
	function navStateMachine()
	{	
		if(navState == 'back')
		{	
			/* prevents nav from being selected due to bubbling */
			$("#nav").css('z-index', '4');
			
			/* a hack used to solve an issue with the nav opening despite being in the 'back' state */
			$("#navicon").mouseenter(closeNav);
			
			/* change navicon to 'back' */
			naviconBackAnim();
			
			/* close the nav menu */
			freezeNav();
			
			/* return to home section */
			$("#navicon").click(function()
			{
				section *= -1; 					/*play the reverse animation of the corresponding section*/
				SendMessage("Main Camera", "gotoSection", section);
				$('#sectionName').empty();	 	/* remove contents of #sectionName  */
				$('#sectionName').css('display', 'none');	 	/* hide #sectionName  */
				
				$('header p').fadeIn(500);
				
				
				$('#IC-section').css('transform', 'rotateY(-180deg)');
				$('#IC-section').fadeOut(250);
				
				$('#ICSP-section').css('transform', 'rotateY(-180deg)');
				$('#ICSP-section').fadeOut(250);
				
				$('#Pins-section').css('transform', 'rotateY(-180deg)');
				$('#Pins-section').fadeOut(250);
				
				$('#Power-section').css('transform', 'rotateY(-180deg)');
				$('#Power-section').fadeOut(250);
				
				$('#USB-section').css('transform', 'rotateY(-180deg)');
				$('#USB-section').fadeOut(250);
				
				navState = 'main';
				navStateMachine();
			});
		}
		else /*if(navState == "main")*/
		{			
			/* arrange nav above the canvas */
			$("#nav").css('z-index', '10');
			
			/* change navicon to 'main' */
			naviconMainAnim();
			
			/* code for opening and closing nav */
			$("#navicon").mouseenter(openNav);
			$("#nav").mouseleave(closeNav);
			
			
			/* section animations */
			$("#IC").click(function() 
			{
				section = 1;
				SendMessage('Main Camera', 'gotoSection', section);
				
				$('#sectionName').css('display', 'inline-block');
				$('#sectionName').empty();
				$('#sectionName').append('/Microcontroller');
				
				function showIC()
				{
					if(section == 1)
					{
						$('#IC-section').fadeIn(250);
						$('#IC-section').css('transform', 'rotateY(0deg)');
					}
				}
				window.setTimeout(showIC, 3000);
				
				$('header p').fadeOut(500);
				navState = 'back';
				navStateMachine();
			});
			
			$("#ICSP").click(function() 
			{
				section = 2;
				SendMessage('Main Camera', 'gotoSection', section);
				
				$('#sectionName').css('display', 'inline-block');
				$('#sectionName').empty();
				$('#sectionName').append('/ICSP');
				
				function showICSP()
				{
					if(section == 2)
					{
						$('#ICSP-section').fadeIn(250);
						$('#ICSP-section').css('transform', 'rotateY(0deg)');
					}
				}
				window.setTimeout(showICSP, 3000);
				
				$('header p').fadeOut(500);
				navState = 'back';
				navStateMachine();
			});
			
			$("#Pins").click(function() 
			{
				section = 3;
				SendMessage('Main Camera', 'gotoSection', section);
				
				$('#sectionName').css('display', 'inline-block');
				$('#sectionName').empty();
				$('#sectionName').append('/IO Pins');
				
				function showPins()
				{
					if(section == 3)
					{
						$('#Pins-section').fadeIn(250);
						$('#Pins-section').css('transform', 'rotateY(0deg)');
					}
				}
				window.setTimeout(showPins, 3500);
				
				$('header p').fadeOut(500);
				navState = 'back';
				navStateMachine();
			});
			
			$("#Power").click(function() 
			{
				section = 4;
				SendMessage('Main Camera', 'gotoSection', section);
				
				$('#sectionName').css('display', 'inline-block');
				$('#sectionName').empty();
				$('#sectionName').append('/Power');
				
				function showPower()
				{
					if(section == 4)
					{
						$('#Power-section').fadeIn(250);
						$('#Power-section').css('transform', 'rotateY(0deg)');
					}
				}
				window.setTimeout(showPower, 2000);
				
				$('header p').fadeOut(500);
				navState = 'back';
				navStateMachine();
			});
			
			$("#USB").click(function() 
			{
				section = 5;
				SendMessage('Main Camera', 'gotoSection', section);
				
				$('#sectionName').css('display', 'inline-block');
				$('#sectionName').empty();
				$('#sectionName').append('/USB');
				
				function showUSB()
				{
					if(section == 5)
					{
						$('#USB-section').fadeIn(250);
						$('#USB-section').css('transform', 'rotateY(0deg)');
					}
				}
				window.setTimeout(showUSB, 2000);
				
				$('header p').fadeOut(500);
				navState = 'back';
				navStateMachine();
			});
		}	
	console.log(navState);
	} /* end nav state machine */
	
	
	
	/* run at page load */
	closeNav();
	navStateMachine();
	
	$('#IC-section').hide();
	$('#ICSP-section').hide();
	$('#Pins-section').hide();
	$('#Power-section').hide();
	$('#USB-section').hide();
	

	
	
});
