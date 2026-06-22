import os
import re

directory = r'c:\Users\shivansh\Desktop\first hackathon project\medisence-ai\frontend'
ga_code = """
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y71S97VMSP"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-Y71S97VMSP');
  </script>
"""

html_files = [f for f in os.listdir(directory) if f.endswith('.html')]

modified_files = []

for file in html_files:
    if file.startswith('test') or file == 'fix_popup.html' or file == 'simple_test.html':
        continue
    
    filepath = os.path.join(directory, file)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if GA code is already present correctly
    if 'G-Y71S97VMSP' in content and 'window.dataLayer' in content:
        # It's already there
        continue
    
    # If the tag is partially there or missing, we update it
    # First, let's remove any old partial gtag script
    content = re.sub(r'\s*<!-- Google tag \(gtag\.js\) -->.*?</script>\s*<script>.*?</script>\s*', '\n', content, flags=re.DOTALL)
    content = re.sub(r'\s*<!-- Google tag \(gtag\.js\) -->.*?</script>\s*', '\n', content, flags=re.DOTALL)
    
    # Inject before </head>
    if '</head>' in content:
        content = content.replace('</head>', f'{ga_code}</head>')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_files.append(file)
    else:
        print(f'No </head> found in {file}')

print('Modified files:', modified_files)
