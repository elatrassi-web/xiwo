<?php
function xiwo_modern_enqueue_scripts() {
    // Three.js (Required by Globe.gl)
    wp_enqueue_script('three-js', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', array(), '128', true);

    // Globe.gl
    wp_enqueue_script('globe-gl', 'https://unpkg.com/globe.gl@2.32.0', array('three-js'), '2.32.0', true);

    wp_enqueue_style('xiwo-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('xiwo-extra-style', get_template_directory_uri() . '/assets/css/extra.css', array(), '1.0.0');
    wp_enqueue_script('xiwo-main-js', get_template_directory_uri() . '/assets/js/main.js', array('globe-gl'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'xiwo_modern_enqueue_scripts');

function xiwo_modern_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'xiwo'),
    ));
}
add_action('after_setup_theme', 'xiwo_modern_theme_setup');
?>
