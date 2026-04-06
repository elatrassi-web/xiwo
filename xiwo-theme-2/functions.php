<?php
// Functions for XiWO Light Theme 2
if (!function_exists('xiwo_light_setup')) {
    function xiwo_light_setup() {
        add_theme_support('wp-block-styles');
        add_theme_support('editor-styles');
        add_theme_support('post-thumbnails');
    }
}
add_action('after_setup_theme', 'xiwo_light_setup');

function xiwo_light_enqueue_scripts() {
    // Core stylesheet
    wp_enqueue_style('xiwo-light-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));

    // Main aesthetic stylesheet inside assets/css
    wp_enqueue_style('xiwo-light-main', get_template_directory_uri() . '/assets/css/style.css', array('xiwo-light-style'), wp_get_theme()->get('Version'));

    // Main JS script
    wp_enqueue_script('xiwo-light-js', get_template_directory_uri() . '/assets/js/main.js', array(), wp_get_theme()->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'xiwo_light_enqueue_scripts');
