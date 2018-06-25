$(document).ready(function(){

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		//$(".right-mnu").slideToggle();
		//return false;
	});
});

$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

function Slider(width_li,margin_right_li,col_view_img){
    var step=width_li+margin_right_li,
        slider_box_with=col_view_img*step-margin_right_li,
        $col_img=$("#slider_box>ul>li").length,
        col_main_left=0,
        max_col_main_left=$col_img*step;
    $("#slider_box").width(slider_box_with);
    $("#slider_box>ul>li").width(width_li).css("margin-right",margin_right_li);
    $("#left_nav").click(function(){
        if(-col_main_left==max_col_main_left-col_view_img*step){
            col_main_left=0;
        } else{
            col_main_left=col_main_left-step;
        }
        $("#slider_box>ul").css("margin-left",col_main_left+"px");
    });
    $("#right_nav").click(function(){
        if(col_main_left==0){
            col_main_left=-max_col_main_left+col_view_img*step;
        } else{
            col_main_left=col_main_left+step;
        }
        $("#slider_box>ul").css("margin-left",col_main_left+"px");
    });
}
$(Slider(350,30,3));

function Slider1(width_li,margin_right_li,col_view_img){
    var step=width_li+margin_right_li,
        slider_box_with=col_view_img*step-margin_right_li,
        $col_img=$("#clients_slider_box>ul>li").length,
        col_main_left=0,
        max_col_main_left=$col_img*step;
    $("#clients_slider_box").width(slider_box_with);
    $("#clients_slider_box>ul>li").width(width_li).css("margin-right",margin_right_li);
    $("#clients_left_nav").click(function(){
        if(-col_main_left==max_col_main_left-col_view_img*step){
            col_main_left=0;
        } else{
            col_main_left=col_main_left-step;
        }
        $("#clients_slider_box>ul").css("margin-left",col_main_left+"px");
    });
    $("#clients_right_nav").click(function(){
        if(col_main_left==0){
            col_main_left=-max_col_main_left+col_view_img*step;
        } else{
            col_main_left=col_main_left+step;
        }
        $("#clients_slider_box>ul").css("margin-left",col_main_left+"px");
    });
}
$(Slider1(866,70,1));
