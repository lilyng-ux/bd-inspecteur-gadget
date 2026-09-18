/*
* Code JavaScript
*/


/* quand une réponse est écrire, on lance la fonction */
function validateForm(event) {
  /*
  * Empêche le rafraichissement de la page quand
  * on soumet le formulaire (comportement par défaut en HTML)
  */
  event.preventDefault()

  // on affiche la réponse dans la console
  console.log(answer.value)

  // cas de la bonne réponse
  if (answer.value == "VPN30") {
    /*
      si c'est la bonne réponse,
      alors on passe la bordure en vert
      et on affiche le texte de confirmation
    */
    console.log("bonne réponse !")
    answer.style.borderColor = "green"
    confirmation.style.display = "flex"
      }
  // cas de la mauvaise réponse
  else {
    /*
      sinon, on passe la bordure en rouge
    */
    console.log("mauvaise réponse !")
    answer.style.borderColor = "red"
  }
}