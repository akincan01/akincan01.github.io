$(document).ready(function () {
  // Fix mobile hamburger menu touch events
  $('.navbar-toggler').on('click touchstart', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var target = $(this).data('target');
    var $targetNav = $(target);
    
    if ($targetNav.hasClass('show')) {
      $targetNav.removeClass('show');
      $(this).removeClass('active').attr('aria-expanded', 'false');
    } else {
      $targetNav.addClass('show');
      $(this).addClass('active').attr('aria-expanded', 'true');
    }
  });

  // Close mobile menu when clicking outside
  $(document).on('click touchstart', function(e) {
    if (!$(e.target).closest('.navbar').length) {
      $('.navbar-collapse.show').removeClass('show');
      $('.navbar-toggler').removeClass('active').attr('aria-expanded', 'false');
    }
  });

  // Close mobile menu when clicking nav links
  $('.navbar-nav .nav-link').on('click', function() {
    $('.navbar-collapse.show').removeClass('show');
    $('.navbar-toggler').removeClass('active').attr('aria-expanded', 'false');
  });

  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
