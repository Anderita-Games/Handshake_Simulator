#pragma strict
var alive = true;
var hostile = false;
var HScore : UnityEngine.UI.Text;
var CScore : UnityEngine.UI.Text;
var Death : GameObject;
//Fist Bumps
var Fist1 : GameObject;
var Fist2 : GameObject;
var Fist3 : GameObject;
var Fist4 : GameObject;
var Fist5 : GameObject;
//HandShakes
var Hand1 : GameObject;
var Hand2 : GameObject;
var Hand3 : GameObject;
var Hand4 : GameObject;
var Hand5 : GameObject;
//High Fives
var High1 : GameObject;
var High2 : GameObject;
var High3 : GameObject;
var High4 : GameObject;
var High5 : GameObject;

function Start () {
	HScore.text = "HighScore: " + PlayerPrefs.GetInt("HScore");
	PlayerPrefs.SetInt("CScore", 0);
	CScore.text = "Current Score: " + PlayerPrefs.GetInt("CScore");
	while (alive == true) {
		yield WaitForSeconds (.15);
		Pick();
		var numboro = Random.Range(1,25);
		if (numboro == 24) {  // <---  The Refrence >:)
			hostile = true;
			yield WaitForSeconds (1.5);
			if (PlayerPrefs.GetString("Chosen") == PlayerPrefs.GetString("RChosen")) {
				Debug.Log("Correct!");
				PlayerPrefs.SetInt("CScore", PlayerPrefs.GetInt("CScore")+1);
				CScore.text = "Current Score: " + PlayerPrefs.GetInt("CScore");
			}else if (PlayerPrefs.GetString("Chosen") != PlayerPrefs.GetString("RChosen")) {
				Debug.Log("Incorrect!");
				if (PlayerPrefs.GetInt("CScore") >= PlayerPrefs.GetInt("HScore")) {
					PlayerPrefs.SetInt("HScore", PlayerPrefs.GetInt("CScore"));
					HScore.text = "HighScore: " + PlayerPrefs.GetInt("HScore");
				}
				Death.SetActive (true);
				alive = false;
			}
			PlayerPrefs.SetString("Chosen", "");
			hostile = false;
		}
	}
	while (alive == true) {
		yield WaitForSeconds (1);
		PlayerPrefs.SetInt("Wasted", PlayerPrefs.GetInt("Wasted")+1);
	}
}

function Pick () {
	Erase();
	var numboro = Random.Range(1,4);
	if (numboro == 1) {
		var numboro2 = Random.Range(1,6);
		if (numboro2 == 1) {
			Fist1.SetActive (true);
		}else if (numboro2 == 2) {
			Fist2.SetActive (true);
		}else if (numboro2 == 3) {
			Fist3.SetActive (true);
		}else if (numboro2 == 4) {
			Fist4.SetActive (true);
		}else if (numboro2 == 5) {
			Fist5.SetActive (true);
		}
		PlayerPrefs.SetString("RChosen", "fist");
	}else if (numboro == 2) {
		numboro2 = Random.Range(1,6);
		if (numboro2 == 1) {
			Hand1.SetActive (true);
		}else if (numboro2 == 2) {
			Hand2.SetActive (true);
		}else if (numboro2 == 3) {
			Hand3.SetActive (true);
		}else if (numboro2 == 4) {
			Hand4.SetActive (true);
		}else if (numboro2 == 5) {
			Hand5.SetActive (true);
		}
		PlayerPrefs.SetString("RChosen", "hand");
	}else if (numboro == 3) {
		numboro2 = Random.Range(1,6);
		if (numboro2 == 1) {
			High1.SetActive (true);
		}else if (numboro2 == 2) {
			High2.SetActive (true);
		}else if (numboro2 == 3) {
			High3.SetActive (true);
		}else if (numboro2 == 4) {
			High4.SetActive (true);
		}else if (numboro2 == 5) {
			High5.SetActive (true);
		}
		PlayerPrefs.SetString("RChosen", "high");
	}
}

function Erase () {
	Fist1.SetActive (false);
	Fist2.SetActive (false);
	Fist3.SetActive (false);
	Fist4.SetActive (false);
	Fist5.SetActive (false);
	Hand1.SetActive (false);
	Hand2.SetActive (false);
	Hand3.SetActive (false);
	Hand4.SetActive (false);
	Hand5.SetActive (false);
	High1.SetActive (false);
	High2.SetActive (false);
	High3.SetActive (false);
	High4.SetActive (false);
	High5.SetActive (false);
}

function fists () {
	if (hostile == true) {
		  PlayerPrefs.SetString("Chosen", "fist");
		  PlayerPrefs.SetInt("fistcount", PlayerPrefs.GetInt("fistcount")+1);
	}
}

function hands () {
	if (hostile == true) {
		 PlayerPrefs.SetString("Chosen", "hand");
		 PlayerPrefs.SetInt("handcount", PlayerPrefs.GetInt("handcount")+1);
	}
}

function highs () {
	if (hostile == true) {
		 PlayerPrefs.SetString("Chosen", "high");
		 PlayerPrefs.SetInt("highcount", PlayerPrefs.GetInt("highcount")+1);
	}
}

//End Buttons
function Games () {
		Application.LoadLevel ("Game");
}

function Quit () {
		Application.LoadLevel ("MainMenu");
}
