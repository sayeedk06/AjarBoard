import requests

endpoint = "http://127.0.0.1:8000/api/upload_data/"

files = {'file': open('delivery.csv','rb')}

get_response = requests.post(endpoint, files=files, params={'file_type': 'csv'})

print(get_response.json())