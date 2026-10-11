"""Check rendered local links/assets and unfinished starter content."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import sys
root=Path(sys.argv[1] if len(sys.argv)>1 else '_site').resolve()
errors=[]
class Links(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.ids=set()
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        if 'id' in attrs: self.ids.add(attrs['id'])
        for attr in ('href','src'):
            if attr in attrs: self.links.append(attrs[attr])
pages={}
for file in root.rglob('*.html'):
    parser=Links(); parser.feed(file.read_text()); pages[file.resolve()]=parser
    text=file.read_text()
    for token in ('YOUR-USERNAME', 'Figure placeholder:', 'Citation to verify:', 'Evidence to add:'):
        if token in text: errors.append(f'{file.relative_to(root)}: unfinished content: {token}')
for file,parser in pages.items():
    for link in parser.links:
        url=urlsplit(link)
        if url.scheme or url.netloc: continue
        target=(root/unquote(url.path.lstrip('/')) if url.path.startswith('/') else file.parent/unquote(url.path)) if url.path else file
        target=target.resolve()
        if target.is_dir(): target=target/'index.html'
        if not target.exists(): errors.append(f'{file.relative_to(root)}: missing {link}')
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f'{file.relative_to(root)}: missing anchor {link}')
if not (root/'index.html').is_file(): errors.append('Missing homepage')
for error in errors: print(error)
print(f'Checked {len(pages)} HTML pages; {len(errors)} errors.')
sys.exit(bool(errors))
