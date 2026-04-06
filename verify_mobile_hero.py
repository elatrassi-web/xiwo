from playwright.sync_api import sync_playwright
import re
import os

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Render with the custom verify approach to ensure CSS is loaded
    with open('xiwo-modern-theme/templates/front-page.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    html_content = re.sub(r'<!--/?wp:.*?-->', '', html_content)
    css_path = os.path.abspath('xiwo-modern-theme/style.css')

    full_html = f"""
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            :root {{
                --wp--preset--color--primary: #39ff14;
            }}
            body {{
                margin: 0;
                padding: 0;
                background-color: #080b0c;
                font-family: Arial, sans-serif;
            }}
        </style>
        <link rel="stylesheet" href="file://{css_path}">
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """
    with open('rendered_mobile.html', 'w', encoding='utf-8') as f:
        f.write(full_html)

    # Mobile viewport
    page_mobile = browser.new_page(viewport={"width": 390, "height": 844})
    page_mobile.goto(f"file://{os.path.abspath('rendered_mobile.html')}")
    page_mobile.wait_for_timeout(1000)
    page_mobile.screenshot(path="hero_mobile_fixed.png", full_page=False)

    # Desktop viewport for comparison
    page_desktop = browser.new_page(viewport={"width": 1400, "height": 900})
    page_desktop.goto(f"file://{os.path.abspath('rendered_mobile.html')}")
    page_desktop.wait_for_timeout(1000)
    page_desktop.screenshot(path="hero_desktop_fixed.png", full_page=False)

    browser.close()
