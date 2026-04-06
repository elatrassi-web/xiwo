from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1400, "height": 900})

    # Use our custom verify_theme.py approach to load the header directly
    import re
    import os

    with open('xiwo-modern-theme/parts/header.html', 'r', encoding='utf-8') as f:
        html_content = f.read()

    html_content = re.sub(r'<!--/?wp:.*?-->', '', html_content)

    css_path = os.path.abspath('xiwo-modern-theme/style.css')

    full_html = f"""
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
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
        <div style="height: 100vh; background: #080b0c; color: white; display: flex; align-items: center; justify-content: center;">
            <p>Background Content</p>
        </div>
    </body>
    </html>
    """

    with open('rendered_modal.html', 'w', encoding='utf-8') as f:
        f.write(full_html)

    page.goto(f"file://{os.path.abspath('rendered_modal.html')}")
    page.wait_for_timeout(1000)

    # Take screenshot before opening modal
    page.screenshot(path="modal_closed.png")

    # Click to open modal
    page.click("#openZoneModalBtn")
    page.wait_for_timeout(500)

    # Take screenshot after opening modal
    page.screenshot(path="modal_open.png")

    browser.close()
