from pathlib import Path
import re

for file in Path("src/pages").glob("*.jsx"):
    content = file.read_text(encoding="utf-8")

    content, count = re.subn(
        r'<a(\s[^>]*?)href="(/(?:about|education|experience|projects|skills|coursework|credits)?)"',
        r'<Link\1to="\2"',
        content
    )

    if count:
        content = re.sub(r'</a>', '</Link>', content)
        content = 'import { Link } from "react-router-dom";\n' + content
        file.write_text(content, encoding="utf-8")
        print(f"Updated {file.name}")

