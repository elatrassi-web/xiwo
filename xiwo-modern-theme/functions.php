<?php
/**
 * Xiwo Modern Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 */

if ( ! function_exists( 'xiwo_modern_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Xiwo Modern 1.0
	 *
	 * @return void
	 */
	function xiwo_modern_support() {
		// Enqueue editor styles.
		add_editor_style( 'style.css' );
	}

endif;
add_action( 'after_setup_theme', 'xiwo_modern_support' );

/**
 * Enqueue scripts and styles.
 */
function xiwo_modern_scripts() {
	// Enqueue theme stylesheet.
	wp_enqueue_style( 'xiwo-modern-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get( 'Version' ) );

	// Enqueue custom JS for interactivity (Popup, Tabs, Carousel, Animations).
	wp_enqueue_script( 'xiwo-modern-script', get_template_directory_uri() . '/assets/js/main.js', array(), wp_get_theme()->get( 'Version' ), true );

    // Pass AJAX URL to script if needed
    wp_localize_script( 'xiwo-modern-script', 'xiwoModernParams', array(
        'ajaxUrl' => admin_url( 'admin-ajax.php' )
    ) );
}
add_action( 'wp_enqueue_scripts', 'xiwo_modern_scripts' );
