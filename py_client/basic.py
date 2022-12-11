import requests


endpoints = "http://localhost:8000/api/"

get_reponse = requests.get(endpoints)

print(get_reponse.json())

