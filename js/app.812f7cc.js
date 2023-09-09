function n(text, type, time, closein) {
    timen = (time) ? time : 3500;
    bdsd = (closein) ? closein : true;
    new Noty({
        text        : text,
        type        : type,
        dismissQueue: true,
        layout      : 'bottomRight',
        theme       : 'mint',
        progressBar: true,
        timeout: timen,
        killer: bdsd
    }).show();
}

const loader = document.querySelector(".loader");
         window.onload = function(){
           setTimeout(function(){
			 document.title = 'RUBI - загрузка'
             loader.style.opacity = "0";
             setTimeout(function(){
               loader.style.display = "none";
			   document.title = 'RUBI'
             }, 500);
           },1500);
         }

const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  $('body').addClass('stops');
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
  $('body').removeClass('stops');
});

$(function(){
	$('.profile-btn').click(function(event) {
		window.location="profile.html";
	});
});

$(function(){
	$('.BonusButton-header-btn').click(function(event) {
		$('body').addClass('stops');
		$('.bm').addClass('open');
	});
});

$(function(){
	$('.bm_close').click(function(event) {
		$('.bm').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
	$('.Wallet_payment').click(function(event) {
		$('body').addClass('stops');
		$('.pmod').addClass('open');
	});
});

$(function(){
	$('.pmod_close').click(function(event) {
		$('.pmod').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
	$('.invest--btn-banner').click(function(event) {
		$('body').addClass('stops');
		$('.pmod').addClass('open');
	});
});

$(function(){
	$('.invest-3i-button').click(function(event) {
		$('body').addClass('stops');
		$('.pmod').addClass('open');
	});
});

$(function(){
	$('.pmod_close').click(function(event) {
		$('.pmod').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
	$('.supportBtn').click(function(event) {
		n('Недоступно', 'error');
	});
});

$(function(){
	$('.Wallet_withdraw').click(function(event) {
		$('.withmod').addClass('open');
		$('body').addClass('stops');
	});
});

$(function(){
	$('.withmod_close').click(function(event) {
		$('.withmod').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
$('.button-transferBonus').click(function(event) {
	if($('.bonusValue--input').val() < 100){
		n('Минимальная сумма обмена 100', 'error');
	}
	if($('.bonusValue--input').val() > 5000){
		n('Максимальная сумма обмена 5000', 'error');
	}
});
    var bonusValue = $('.bonusValue--input input').val();
	$('.rRubValue--input input').html(bonusValue); 
});

function choosePay(payId, e) {
    $('.modal_payment__body-method').removeClass('pay_active');
    $(e).addClass('pay_active');
}

        $(document).ready(function(){
            $("#send-btn").on("click", function(){
			$value = $("#data").val();
                $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
                $(".form").append($msg);
                $("#data").val('');

                $.ajax({
                    url: 'message.php',
                    type: 'POST',
                    data: 'text='+$value,
                    success: function(result){
                        $replay = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>'+ result +'</p></div></div>';
                        $(".form").append($replay);
                        $(".form").scrollTop($(".form")[0].scrollHeight);
                    }
                });
            });
        });

$(function(){
$('.withdrawButton-block--btn').click(function(event) {
	
	if($('.withdrawWallet').val() == ''){
		return n('Введите номер счета', 'error');
	}
	if($('.WithdrawSize').val() == ''){
		return n('Введите сумму', 'error');
	}
	if($('.WithdrawSize').val() < 200){
		return n('Минимальная сумма вывода 200', 'error');
	}
	if($('.WithdrawSize').val() > 10000){
		return n('Максимальная сумма вывода 10000', 'error');
	}
                       $.ajax({
                                                                                type: 'POST',
                                                                                url: '../../action.php',
beforeSend: function() {

										},	
                                                                                data: {
                                                                                    type: "withdrawuser",
           system: $('#withdrawSystem').val(),
           wallet: $('.withdrawWallet').val(),                                        sum: $('.WithdrawSize').val()                                   
           },
                                        success: function(data) {
                                            var obj = jQuery.parseJSON(data);
                                            if (obj.success == "success") {
                             
                    n('Выплата успешно создана!', 'success');
					  $("#withdrawT").load("withdraw.php #withdrawT"); 
					   $('.withdraw-user-wallet-title-value').html(obj.new_balance);
                                                                return 
                                            }else{
                n(obj.error, 'error');                               
		 $("#withdrawT").load("withdraw.php #withdrawT"); 
                                            }
                                        }   
   });
   });
});
function removeWithdrawUser(deletew) {
  $.ajax({
                                                                                type: 'POST',
                                                                                url: '../../action.php',
beforeSend: function() {

										},	
                                                                                data: {
                                                                                    type: "deletewithdraw",
           del: deletew
                                           
           },
                                        success: function(data) {
                                            var obj = jQuery.parseJSON(data);
                                            if (obj.success == "success") {
                                                n('Выплата успешно отменена', 'success');
                                                     document.getElementById(deletew + '_his').remove();
                                                   $('.withdraw-user-wallet-title-value').html(obj.new_balance);
                                                                return 
                                            }else{
                                                n('Что-то пошло не так', 'error');
                                            }
                                        }   
   });
}
                            function removeWithdraw(id) {
                        $.ajax({
                            type: 'POST',
                            url: '../../action.php',
                            data: {
                                type: "removeWithdraw",
                                sid: Cookies.get('sid'),
                                id: id
                            },
                            success: function(data) {
                                var obj = jQuery.parseJSON(data);
                                if ('success' in obj) {
                                	$('.withdraw-user-wallet-title-value').html(obj.new_balance);
                                }
                            }
                        });
                    }


                    function showWithdrawHistory(start) {

                        $.ajax({
                            type: 'POST',
                            url: '../../action.php',
                            data: {
                                type: "withdrawHistory",
                                sid: Cookies.get('sid'),
                                start: start
                            },
                            success: function(data) {
                                var obj = jQuery.parseJSON(data);
                                if ('success' in obj) {
                                    $("#withdrawHistoryLoad").hide();
                                    var tt = $('#withdrawT').html();
                                    $('#withdrawT').html(tt + obj.success.add);
                                    $('#gnext').html(obj.success.next);
                                }
                            }
                        });

                    }


$(function(){
	$('.reg-click').click(function(event) {
		$('.pm').removeClass('open');
		$('.reg').addClass('open');
	});
});

$(function(){
	$('.log-click').click(function(event) {
		$('.pm').addClass('open');
		$('.reg').removeClass('open');
	});
});

$(function(){
	$('.loginBtnsIpe').click(function(event) {
		$('body').addClass('stops');
		$('.pm').addClass('open');
	});
});

$(function(){
	$('.invest-3i-button2').click(function(event) {
		$('body').addClass('stops');
		$('.pm').addClass('open');
	});
});

$(function(){
	$('.reg_close').click(function(event) {
		$('.reg').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
	$('.pm_close').click(function(event) {
		$('.pm').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
$('.login-btn').click(function(event) {
                                $.ajax({
                                    type: 'POST',
                                    url: '../action.php',
                                    beforeSend: function() {
                                        $('#error_enter').hide();
                                        
                                    },
                                    data: {
                                        type: "login",
                                        login: $(".login-input-name").val(),
        								pass: $(".password-input-name-s").val()  
                                    },
                                    success: function(data) {
                                        
                                

                                        var obj = jQuery.parseJSON(data);
                                        if (obj.success == "success") {
                                            window.location.href = '';
                                            // return false;
                                        }else{
                                        $('#error_enter').show();
                                        $('#error_enter').html(obj.error);
                                        $('#error_enter').css('display', 'block');
                                        }


                                    }
                                });
                            });
});

$(function(){
$('.register-btn').click(function(event) {

                                $.ajax({
                                    type: 'POST',
                                    url: '../action.php',
                                    beforeSend: function() {
                                    },
                                    data: {
                                        type: "registration",
                                         login: $(".userRegsiter").val(),
        								pass: $(".userPassRegister").val(),  
        								repeatpass: $(".userPassRegister1").val()   
                                    },
                                    success: function(data) {
                                        var obj = jQuery.parseJSON(data);
                                            if (obj.success == "success") {
                                             window.location.href = '';
                                            // return false;
                                        }else{
                                          
                                        $('#butRegister').html('Зарегистрироваться');
                                        n(obj.error, 'error');
                                        }


                                    }
                                });
                           });
});  

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
        const pattern = el.getAttribute("placeholder"),
            slots = new Set(el.dataset.slots || "_"),
            prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
            first = [...pattern].findIndex(c => slots.has(c)),
            accept = new RegExp(el.dataset.accept || "\\d", "g"),
            clean = input => {
                input = input.match(accept) || [];
                return Array.from(pattern, c =>
                    input[0] === c || slots.has(c) ? input.shift() || c : c
                );
            },
            format = () => {
                const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
                    i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
                    return i<0? prev[prev.length-1]: back? prev[i-1] || first: i;
                });
                el.value = clean(el.value).join``;
                el.setSelectionRange(i, j);
                back = false;
            };
        let back = false;
        el.addEventListener("keydown", (e) => back = e.key === "Backspace");
        el.addEventListener("input", format);
        el.addEventListener("focus", format);
        el.addEventListener("blur", () => el.value === pattern && (el.value=""));
    }
});