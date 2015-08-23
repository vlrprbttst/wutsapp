<?php
include 'includes/head.php';
?>
<body>
	<div id="preloader">
		<div id="status"></div>
	</div>
	<div class="sharingiscaring">
		<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world" data-size="small" style="padding:0 5px 0 0"> Tweet</a>
		<div class="fb-like" data-href="http://www.valeriopierbattista.com/projects/whatsapp/index.php" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
	</div>
	<div id="fb-root"></div>
	<div class="logo">
		<img src="images/dist/logo.png" alt="wutsapp" />
		<p>
			<a href="http://whatsapp.com" target="_blank">Whatsapp</a>-flavoured random instant message non sense
		</p>
	</div>

	<?php
	include 'includes/navigation.php';
	?>
	<div class="phone">
		<div class="wa-container">

			<div class="status-bar">
				<div class="time">
					15:16
				</div>
				<div class="battery">
					<i class="zmdi zmdi-battery"></i>
				</div>
				<div class="network">
					<i class="zmdi zmdi-network"></i>
				</div>
				<div class="wifi">
					<i class="zmdi zmdi-wifi-alt-2"></i>
				</div>
				<div class="star">
					<i class="zmdi zmdi-star"></i>
				</div>
			</div>

			<div class="user-bar">
				<div class="back">
					<i class="zmdi zmdi-arrow-left"></i>
				</div>
				<div class="user">
					<img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" alt="user" />
				</div>
				<div class="user-name">
					<b>Not My Drug Dealer xxxxxxxxxxxxxxxxxxxxxxxxxx</b>
					<span>online now</span>
				</div>
				<div class="actions more">
					<i class="zmdi zmdi-more-vert"></i>
				</div>
				<div class="actions attachment">
					<i class="zmdi zmdi-attachment-alt"></i>
				</div>
				<div class="actions">
					<i class="zmdi zmdi-phone"></i>
				</div>
			</div>
			<div class="chat-window">

				<div class="alert-overlay">
					<div class="alert-card">
						<div class="left">
							I'm sorry but you can't interact with any of these chats.
						</div>
						<div class="right">
							<i class="zmdi zmdi-close"></i>
						</div>
					</div>
				</div>

				<div class="conversation">

					<div class="balloon him">
						Don't save my name as anything sketchy. <span class="data">21:12</span>
					</div>
					<div class="balloon you">
						Okay man I gotchu <span class="data blue">21:12</span>
					</div>
				</div><!-- conversation -->
				<div class="textarea">

					<div class="emoticons"></div>
					<textarea class="message" name="message" placeholder="Type a message"></textarea>
					<div class="photo">
						<i class="zmdi zmdi-camera"></i>
					</div>
					<div class="send-mic">
						<div class="circle-cont">
							<i class="zmdi zmdi-mic"></i>
						</div>
					</div>

				</div>

			</div><!-- chat window -->

			<div class="bottom-bar">
				<div class="triangle">
					<i class="zmdi zmdi-triangle-up"></i>
				</div>
				<div>
					<i class="zmdi zmdi-circle-o"></i>
				</div>
				<div>
					<i class="zmdi zmdi-square-o"></i>
				</div>
			</div>

		</div>
	</div>
	<?php
	include 'includes/footer.php';
	?>
	<?php
	include 'includes/scripts.php';
	?>

	<?php
	include 'includes/document_end.php';
	?>
