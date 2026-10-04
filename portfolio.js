$(function () {
  $(".menu-toggle").on("click", function () {
    const isOpen = $(".site-nav").toggleClass("is-open").hasClass("is-open");
    $(this).attr("aria-expanded", isOpen);
  });

  $(".filter-button").on("click", function () {
    const filter = $(this).data("filter");
    $(".filter-button").removeClass("active");
    $(this).addClass("active");
    $(".project-card").each(function () {
      const visible = filter === "all" || $(this).data("category") === filter;
      $(this).toggle(visible);
    });
  });

  $(".reveal").each(function (index) {
    $(this)
      .css("animation-delay", `${index * 80}ms`)
      .addClass("is-visible");
  });
});
