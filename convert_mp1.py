from pathlib import Path
from html.parser import HTMLParser
import re

root = Path.cwd()
src = root / "src"
original = root / "mp1-original"

(src / "pages").mkdir(parents=True, exist_ok=True)
(src / "components").mkdir(parents=True, exist_ok=True)
(src / "hooks").mkdir(parents=True, exist_ok=True)

pages = {
    "index": "Home",
    "about": "About",
    "education": "Education",
    "experience": "Experience",
    "projects": "Projects",
    "skills": "Skills",
    "coursework": "Coursework",
    "credits": "Credits",
}

class Converter(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.output = []

    def handle_starttag(self, tag, attrs):
        converted = []
        for key, value in attrs:
            if key == "class":
                key = "className"
            elif key == "for":
                key = "htmlFor"
            elif key.startswith("on"):
                continue

            if key == "href" and value:
                if value.endswith(".html"):
                    value = "/" if value == "index.html" else "/" + value[:-5]

            if value is None:
                converted.append(key)
            else:
                value = value.replace("&", "&amp;").replace('"', "&quot;")
                converted.append(f'{key}="{value}"')

        attributes = " " + " ".join(converted) if converted else ""
        if tag in ("input", "img", "br", "hr", "meta", "link"):
            self.output.append(f"<{tag}{attributes} />")
        else:
            self.output.append(f"<{tag}{attributes}>")

    def handle_endtag(self, tag):
        if tag not in ("input", "img", "br", "hr", "meta", "link"):
            self.output.append(f"</{tag}>")

    def handle_data(self, data):
        self.output.append(data.replace("{", "&#123;").replace("}", "&#125;"))

    def handle_entityref(self, name):
        self.output.append(f"&{name};")

    def handle_charref(self, name):
        self.output.append(f"&#{name};")

def convert(html):
    parser = Converter()
    parser.feed(html)
    return "".join(parser.output)

for filename, component in pages.items():
    html = (original / f"{filename}.html").read_text(encoding="utf-8")
    match = re.search(r"<main\b[^>]*>(.*?)</main>", html, re.S | re.I)

    if not match:
        raise RuntimeError(f"Missing main element: {filename}")

    content = match.group(1)

    if filename == "projects":
        content = re.sub(
            r'<section class="calculator">.*?</section>',
            '<div data-react-calculator></div>',
            content,
            flags=re.S
        )

    jsx = convert(content)

    if filename == "projects":
        jsx = jsx.replace(
            '<div data-react-calculator></div>',
            '<Calculator />'
        )

    imports = 'import Calculator from "../components/Calculator";\n' if filename == "projects" else ""

    code = (
        imports +
        f'export default function {component}() {{\n'
        f'  return <main>{jsx}</main>;\n'
        f'}}\n'
    )

    (src / "pages" / f"{component}.jsx").write_text(code, encoding="utf-8")

(src / "styles.css").write_bytes((original / "styles.css").read_bytes())

print("Converted all 8 pages and copied CSS.")
