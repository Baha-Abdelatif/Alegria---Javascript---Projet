$(document).ready(function () {
  // Recuperer les cartes et gerer le survol individuel de chaque carte
  $.get(
    "https://firestore.googleapis.com/v1/projects/forfun-5938e/databases/(default)/documents/alegria_js_b7/content",
    function (data) {
      let cards = data.fields.cards.arrayValue.values;
      cards.map((card, idx) => {
        let cardData = card.stringValue;
        $(".container-cards").append(cardData);

        $(".container-cards")
          .children()
          [idx].classList.add("card-" + idx);

        $(`.card-${idx}`).on("mouseover", (e) => {
          $(`.card-${idx}`).css("transform", "scale(1.1)");
          e.stopPropagation();
          e.preventDefault();
        });
        $(`.card-${idx}`).on("mouseout", (e) => {
          $(`.card-${idx}`).css("transform", "scale(1)");
          e.stopPropagation();
          e.preventDefault();
        });
      });
    }
  );

  // assombrir la page lors du clic sur le bouton "Postuler" (#postuler)
  $("#postuler").on("click", (e) => {
    $(".overlay").css("display", "block");
    submitPost();
    e.stopPropagation();
    e.preventDefault();
    $("#close-pop").on("click", (e) => {
      $(".overlay").css("display", "none");
      $("#application-modal").css("display", "none");
      e.stopPropagation();
      e.preventDefault();
    });
  });
});
