import streamlit as st

st.title("Ashutosh's Streamlit App")
st.write("This is a simple Streamlit app!")

user_input = st.text_input("Enter some text")
st.write(f"You entered: {user_input}")
