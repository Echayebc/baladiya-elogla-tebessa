import os
css = """
<style id="big-font">
  body{font-size:28px !important; line-height:2.0 !important; font-family: Tahoma !important;}
  h1,h2,h3{font-size:34px !important; font-weight:900 !important; color:#0e6ba8 !important;}
  div,p,li,span{font-size:26px !important; line-height:1.9 !important; font-weight:600 !important;}
  .box, .card{padding:18px !important; margin:14px 8px !important; border-radius:18px !important;}
</style>
</head>
"""
for f in os.listdir('.'):
  if f.endswith('.html') and f != 'index.html' and f != '404.html':
    with open(f,'r',encoding='utf-8',errors='ignore') as file:
      content = file.read()
    if 'id="big-font"' not in content:
      content = content.replace('</head>', css)
      content = content.replace('font-size: 12px','font-size: 26px')
      content = content.replace('font-size:12px','font-size: 26px')
      content = content.replace('font-size:14px','font-size: 26px')
      with open(f,'w',encoding='utf-8') as file:
        file.write(content)
print("تم تكبير الخط")
