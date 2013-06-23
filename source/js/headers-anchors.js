$(function(){

  $('#languages-nav a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $(".subnav").hide();
    $(this).parent().find("ul").show();
  });

  $("#languages-nav li a").each(function(){
    langLink = $(this);
    langAnchor = langLink.attr("href");
    target = $("<ul class='unstyled subnav' style='display: none'></ul>").appendTo(langLink.parent());
    $(langAnchor + " h2").each(function(index, header){
      target.append("<li><a href='#"+ $(header).attr("id") +"'>"+ $(header).text() + "</a></li>");
    });
  });

  $('#languages-nav a:first').click();
});
