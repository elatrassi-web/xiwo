<?php
// Functions for XiWO Modern Theme
if (!function_exists('xiwo_modern_setup')) {
    function xiwo_modern_setup() {
        add_theme_support('wp-block-styles');
        add_theme_support('editor-styles');
        add_theme_support('post-thumbnails');
    }
}
add_action('after_setup_theme', 'xiwo_modern_setup');

function xiwo_modern_enqueue_scripts() {
    // Core stylesheet
    wp_enqueue_style('xiwo-modern-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));

    // Extra stylesheet inside assets/css
    wp_enqueue_style('xiwo-modern-extra', get_template_directory_uri() . '/assets/css/extra.css', array('xiwo-modern-style'), wp_get_theme()->get('Version'));

    // Main JS script
    wp_enqueue_script('xiwo-modern-js', get_template_directory_uri() . '/assets/js/main.js', array(), wp_get_theme()->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'xiwo_modern_enqueue_scripts');
