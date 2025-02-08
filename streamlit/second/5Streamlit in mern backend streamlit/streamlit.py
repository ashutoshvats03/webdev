import streamlit as st
import requests
import pandas as pd



# 2. File Uploader (User Data Upload)
uploaded_file = st.file_uploader("Choose a file")
if uploaded_file is not None:
    st.write(f"File uploaded: {uploaded_file.name}")





# 5. Text Input (User Feedback/Interaction)
user_input = st.text_input("Enter your feedback")
if st.button("Submit"):
    payload = {"field1": user_input, "field2": 0}
    response = requests.post('http://localhost:5000/api/data', json=payload)
    if response.status_code == 200:
        st.write("Feedback submitted successfully!")
