$(function(){
	$('.en--btn').click(function(event) {
		$('.en--btn').addClass('active');
		$('.ru--btn').addClass('active');
		$('.mainPage').html('Home');
		$('.aboutPage').html('About');
		$('.termsPage').html('Terms');
		$('.supportPage').html('Support');
		$('.Wallet_payment').html('Deposit');
		$('.Wallet_withdraw').html('Withdraw');
		$('.mainWallet--title').html('Main Wallet');
		$('.bonusWallet--title').html('Bonus Wallet');
		$('.BonusButton-header-btn span').html('Exchange');
		$('.walletLinkF span').html('Key Features of the RUBI Wallet');
		$('.Bonus_link_btns span').html('Bonus Account Exchange Rules');
		$('.Wallet-block-desc').html('Earn Bonuses and exchange them for real money');
		$('.profile--title').html('Profile');
		$('.login--title').html('Login');
		$('.mail--title').html('Mail');
		$('.phone--title').html('Phone Number');
		$('.password--title').html('Password');
		$('.logout-btn').html('Logout');
		$('.close_modal_Modal_Layout--btn').html('Close');
		$('.bonu-s--title').html('Bonus Exchange');
		$('.bonus-modal_Block-title').html('Bonus account');
		$('.button-transferBonus').html('Exchange');
		$('.Banner_desc').html('Investment project, growth for investment in the future');
	});
});

$(function(){
	$('.ru--btn').click(function(event) {
		$('.ru--btn').removeClass('active');
		$('.en--btn').removeClass('active');
		$('.mainPage').html('Главная');
		$('.aboutPage').html('О нас');
		$('.termsPage').html('Соглашения');
		$('.supportPage').html('Поддержка');
		$('.Wallet_payment').html('Пополнить');
		$('.Wallet_withdraw').html('Вывести');
		$('.mainWallet--title').html('Основной счет');
		$('.bonusWallet--title').html('Бонусный счет');
		$('.BonusButton-header-btn span').html('Обмен');
		$('.walletLinkF span').html('Основные функции кошелька RUBI');
		$('.Bonus_link_btns span').html('Правила обмена Бонусного счета');
		$('.Wallet-block-desc').html('Зарабатывайте Бонусы и обменивайте их на настоящие деньги');
		$('.profile--title').html('Профиль');
		$('.login--title').html('Логин');
		$('.mail--title').html('Почта');
		$('.phone--title').html('Номер телефона');
		$('.password--title').html('Пароль');
		$('.logout-btn').html('Выйти');
		$('.close_modal_Modal_Layout--btn').html('Закрыть');	
		$('.bonu-s--title').html('Обмен Бонусов');
		$('.bonus-modal_Block-title').html('Бонусный счет');
		$('.button-transferBonus').html('Обменять');
		$('.Banner_desc').html('Инвестиционный проект, позволяющий зарабатывать на инвестициях в кратчайшие сроки');
	});
});