# 1. Line Chart (Real-Time Data Visualization)
url = 'http://localhost:5000/api/data'
response = requests.get(url)
if response.status_code == 200:
    data = response.json()
df = pd.DataFrame(data)
st.line_chart(df[['field2']])
# 3. Data Table (Interactive Data Display)
st.dataframe(df)