import requests
import json

url = "https://api1.ldpform.com/sendform"

payload = {
    "form_config_id": "670649c72e665800126447ae",
    "ladi_form_id": "FORM3",
    "data_key": None,
    "form_data": [
        {"name": "name", "value": "Nguyễn Thu Trang"},
        {"name": "email", "value": "tumo18a1@gmail.com"},
        {"name": "phone", "value": "0372876874"},
        {"name": "location", "value": "Hà Nội"},
        {"name": "gpa", "value": "8.4"},
        {"name": "interest", "value": "English Track Cử nhân"}
    ],
    "ladi_page_id": "667a391bc537e500124e2bd3",
    "merge_address": False,
    "status_send": 2,
    "time_zone": 7,
    "total_revenue": 0,
    "tracking_form": [
        {"name": "url_page", "value": "https://www.hocbonghanquoc.com/soganguniversity"}
    ]
}

headers = {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0"
}

response = requests.post(url, data=json.dumps(payload), headers=headers)
