$(document).ready(function () {
  $(".rate li").click(function () {
    // Vérifie si l'élément cliqué a déjà la classe 'selected'
    if ($(this).hasClass("selected")) {
      // Si oui, supprime la classe 'selected' (revert à la couleur de fond d'origine)
      $(this).removeClass("selected");
    } else {
      // Sinon, supprime la classe 'selected' de tous les éléments li
      $(".rate li").removeClass("selected");

      // Ajoute la classe 'selected' à l'élément cliqué
      $(this).addClass("selected");
    }
  });

  $("#submit-button").click(function () {
    // Récupère la note sélectionnée
    var selectedNote = $(".rate li.selected").text();

    // Met à jour le texte avec la note sélectionnée
    $("#note-value").text(selectedNote);

    $(".card.after").css("display", "flex");
    $(".card.before").css("display", "none");

    // Retarde la réinitialisation  après 5 secondes
    setTimeout(function () {
      $(".card.after").css("display", "");
      $(".card.before").css("display", "");
    }, 5000);
  });
});
