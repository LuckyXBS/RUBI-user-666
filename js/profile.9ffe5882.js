   const passField = document.querySelector(".account-profile-content-info-password-title-input-content input");
      const showBtn = document.querySelector(".show-pass i");
      showBtn.onclick = (()=>{
        if(passField.type === "password"){
          passField.type = "text";
          showBtn.classList.add("hide-pass");
        }else{
          passField.type = "password";
          showBtn.classList.remove("hide-pass");
        }
      });
	  
                                       function walletQiwi() {
										if ($('#qiwiWallet').val().length < 11){
										n('Номер телефона от 11 символов', 'error');
										}
									$.ajax({
                                        type: 'POST',
                                        url: 'action.php',
										beforeSend: function() {
										    $('.rpbss').addClass("disabled");
										},	
                                        data: {
                                            type: "qiwiWalletAdd",
                                            sid: Cookies.get('sid'),
                                            walletsQiwiAdd: $('#qiwiWallet').val()
                                        },
                                        success: function(data) {
                                            $('.rpbss').removeClass("disabled");
                                            var obj = jQuery.parseJSON(data);
                                            if ('success' in obj) {
                                               	n('Реквизиты сохранены', 'success');
											  Cookies.set('sid', obj.success.sid, { path: '/',secure:true });
																						 return false;
                                            }else{
												n(obj.error.text, 'error');
											}
                                        }
                                    });
                                    
                                }