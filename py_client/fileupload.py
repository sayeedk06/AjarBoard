import requests

endpoint = "http://127.0.0.1:8000/api/upload_data/"

files = {'file': open('delivery.csv','rb')}

values = {'file_type': 'csv'}

get_response = requests.post(endpoint, files=files, data=values)

print(get_response.json())