import os
import json


folder_path = 'data\\applet'


files = os.listdir(folder_path)
for file in files:
    with open('data\\applet\\'+file, 'r') as f:
        data = json.load(f)
        print
        applet = data['data']['applet']
        filter_code=applet.get('filter_code', None)
    
    output_path = os.path.join("data/filter_code", f"{file}.js")
    with open(output_path,'w', encoding='utf-8') as output:
        output.write(filter_code)
