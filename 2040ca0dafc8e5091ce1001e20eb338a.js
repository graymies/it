var prl_paripe = !0,
	prlwge_qoks = 0,
	question_total = parseInt(jQuery("#questions_all").data("total"));

function nextQuestion(e, t) {
	"object" == typeof flipClock && "undefined" != typeof flipTime && flipClock.setTime(flipTime), t <= e ? ("object" == typeof flipClock && (flipClock = ""), 
			prl_paripe && (paripe(), prl_paripe = !1)) : (jQuery("#q" + e + ",#qphoto" + e).fadeOut("slow", function() {
		jQuery("#q" + (e + 1) + ",#qphoto" + (e + 1)).fadeIn("slow")
	}), 
	jQuery("body").data("iqcount", e + 1), 
	"object" == typeof flipClock && flipClock.start()
	)
}
function paripe() {
	prl_paripe = !1, "object" == typeof flipClock && (flipClock = ""), $(".p_hidden_survey_finish").fadeOut(),  "function" == typeof DeactivateConfetti && 0 < jQuery("#canvasConfetti").length && 1 == confettiActive && DeactivateConfetti(), $("#content1,.content1,#content0,#main-header").fadeOut("slow", function() {
		$("#content2").fadeIn(), setTimeout(function() {
			$("#result1").fadeIn(1e3)
		}, 3e3), setTimeout(function() {
			$("#result2").fadeIn(1e3)
		}, 4100), setTimeout(function() {
			$("#result3").fadeIn(1e3)
		}, 6e3), setTimeout(function() {
			$("#content2").fadeOut("slow", function() {
// top.location.href=offeurl
		 $("#content3").fadeIn() 
		 $(".p_hidden_survey").fadeIn() 
		 boxRoot['_init']();
// goToUrlFinish()
// "function" == typeof goToUrlFinish &&
// jQuery("#content3").hasClass("goToUrlFinish") && setTimeout(function() {
// goToUrlFinish()
// }, 3e3)
// 
 			})
		}, 7100)
	})
}
jQuery(document).ready(function() {
	var n, o, e;
	jQuery("body").data("iqcount", 1), 0 < jQuery("#questions_all").length ? (n = 100, o = parseInt(jQuery("#questions_all").data("total")), $(".questionsTotal").html(question_total), $(".questions_of").html(o + "/" + o), $(".p_total").html(o), 0 < jQuery(".survey_button_go").length ? (e = ".survey_button_go:not(.qselected)", jQuery("body").on("click", ".bq:not(.survey_button_go)", function() {
		jQuery(".surveyQuestion .bq").removeClass("qselected"), jQuery(this).addClass("qselected")
	})) : (e = ".bq:not(.qclicked)", jQuery("body").on("click", ".bq:not(.survey_button_go)", function() {
		jQuery(this).addClass("qselected")
	})), jQuery("body").on("click", e, function() {
		var e = parseInt(jQuery(this).data("question"));
		if (0 < jQuery("#q" + e + " .survey_button_go").length && 0 == jQuery("#q" + e + " .qselected").length) return alert(q_alert_error), !1;
		1 == e && jQuery(".p_hidden_survey_start").fadeOut(), jQuery("#q" + e + " .bq").addClass("qclicked"), null != jQuery(this).data("ok") && ("1" == jQuery(this).data("ok") && prlwge_qoks++, jQuery("#questions_all").hasClass("no-iluminate") || (jQuery("#q" + e + " .bq").each(function(e) {
			"1" == jQuery(this).data("ok") ? jQuery(this).addClass("bg-success") : jQuery(this).addClass("bg-danger")
		}), n = 500)), $(".questionsOk").html(prlwge_qoks);
		var t = prlwge_qoks / question_total * 100;
		$(".questionsOkPer").html(t), setTimeout(function() {
			nextQuestion(e, o),
			0 < jQuery(".q_points").length && (jQuery(".q_point").removeClass("active"), 
					jQuery(".q_point_" + (e + 1)).addClass("active"))
		}, n)
	}), 
	0 < jQuery(".q_points").length && jQuery(".q_point:first").addClass("active")) : ($(".bq1").click(function() {
		$("#q1").fadeOut("slow", function() {
			$("#q2").fadeIn("slow")
		})
	}),
	$(".bq2").click(function() {
		$("#q2").fadeOut("slow", function() {
			$("#q3").fadeIn("slow")
		})
	}), 
	$(".bq3").click(function() {
		$("#q3").fadeOut("slow", function() {
			$("#q4").fadeIn("slow")
		})
	}),
$(".bq4").click(function() {
	alert(1)
 scrollTo("id1"), $("#content1").fadeOut("slow", function() {
		 $("#content2").fadeIn(), setTimeout(function() {
		 $("#result1").fadeIn(1e3)
		 }, 3e3), setTimeout(function() {
		 $("#result2").fadeIn(1e3)
		 }, 4100), setTimeout(function() {
		 $("#result3").fadeIn(1e3)
		 }, 6e3), setTimeout(function() {
		 $("#content2").fadeOut("slow", function() {
			 "undefined" != typeof roulette_ini ? rouletteRoot._init() : "undefined" !=
			 typeof box_ini ? boxRoot._init() : "undefined" != typeof rid_ini &&
			 ridRoot._init(), 
			 $("#content3").fadeIn()
		 })
		 }, 7100)
		 })
	}))
});