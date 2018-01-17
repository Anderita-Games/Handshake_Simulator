#pragma strict
var HScore : UnityEngine.UI.Text;
var CScore : UnityEngine.UI.Text;
var ButtonsClicked : UnityEngine.UI.Text;
var Fav : UnityEngine.UI.Text;
var Wasted : UnityEngine.UI.Text;

function Start () {
	HScore.text = "HighScore: " + PlayerPrefs.GetInt("HScore");
	CScore.text = "Last Game's Score: " + PlayerPrefs.GetInt("CScore");
	ButtonsClicked.text = "Amount of Buttons Clicked: " + (PlayerPrefs.GetInt("highcount") + PlayerPrefs.GetInt("handcount") + PlayerPrefs.GetInt("fistcount"));
	
	if (PlayerPrefs.GetInt("highcount") >= PlayerPrefs.GetInt("handcount") && PlayerPrefs.GetInt("highcount") >= PlayerPrefs.GetInt("fistcount")) {
	Fav.text = "Favorite Button: " + "High Five Button";
	}else if (PlayerPrefs.GetInt("handcount") >= PlayerPrefs.GetInt("highcount") && PlayerPrefs.GetInt("handcount") >= PlayerPrefs.GetInt("fistcount")) {
	Fav.text = "Favorite Button: " + "Normal Hand Shake Button";
	}else if (PlayerPrefs.GetInt("fistcount") >= PlayerPrefs.GetInt("highcount") && PlayerPrefs.GetInt("fistcount") >= PlayerPrefs.GetInt("handcount")) {
	Fav.text = "Favorite Button: " + "The Fist Button";
	}
	
	Wasted.text = "Time Wasted: " + (PlayerPrefs.GetInt("Wasted") / 60) + " Minutes";
	
}

function Quit () {
		Application.LoadLevel ("MainMenu");
}

function Halp () {
		Application.LoadLevel ("Tutorial");
}