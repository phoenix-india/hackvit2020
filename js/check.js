var check = 1;
  function handleVisibilityChange() {
  if (document.visibilityState === "hidden") {

    action_taker();


  } 
  
}



document.addEventListener('visibilitychange', handleVisibilityChange);

function action_taker()
{
	if(check== 1)
	{
		alert("suspicious activity identified! if prompted again your exam will be ended");
		check++;
		

	}
	else if(check==2)
	{
		location.replace("cheating.html")
	}

}
