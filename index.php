
<?php
add_action( 'genesis_after' , 'ff_add_popup_box' );
function ff_add_popup_box(){
	ff_display_slide_popups();
}
function ff_display_slide_popups(){
	$slide_popups = get_field('slide_popups', 'option');
	if( !$slide_popups ) return;
	echo '<div class="ff-slide-popup-container">';
		foreach( $slide_popups as $slide_popup ) {
			$add_class = ' slide-'. $slide_popup['position'];
			if( $slide_popup['class'] ) $add_class .= ' '. $slide_popup['class'];
			echo '<div id="'. $slide_popup['id'] .'" class="ff-slide-popup'. $add_class .'">';
				echo '<div class="wrapper">';
					echo '<i class="fa fa-close close-btn"></i>';
					echo '<div class="inner">';
						echo do_shortcode($slide_popup['markup']);
					echo '</div>';
				echo '</div>';
			echo '</div>';
		}
	echo '</div>';
}
