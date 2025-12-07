// main.js
$(function() {
  // Mobile nav toggle
  $(".mobile-toggle").on("click", function() {
    $("nav.desktop").slideToggle(160);
  });

  // Add to cart (shop & menu cards)
  $(".add-to-cart").on("click", function() {
    const card = $(this).closest(".card");
    const name = card.data("name");
    const price = card.data("price");
    const img = card.data("img") || card.find("img").attr("src");

    const row = `
      <div class="cart-row">
        <img src="${img}" alt="${name}">
        <div style="flex:1">
          <div style="font-weight:600">${name}</div>
          <div style="color:#6f4e37">₱${price}</div>
        </div>
      </div>
    `;
    $(".cart-items").append(row);
    $(".cart-drawer").addClass("open");
  });

  // Close cart
  $(".close-cart").on("click", function() {
    $(".cart-drawer").removeClass("open");
  });

  // Lightbox for gallery
  $(".gallery-grid img").on("click", function() {
    const src = $(this).attr("src");
    $("#lightbox-img").attr("src", src);
    $("#lightbox").fadeIn(120).css("display", "flex");
  });

  $("#lightbox .close").on("click", function() {
    $("#lightbox").fadeOut(120);
  });

  $("#lightbox").on("click", function(e) {
    if (e.target.id === "lightbox") {
      $(this).fadeOut(120);
    }
  });
});
