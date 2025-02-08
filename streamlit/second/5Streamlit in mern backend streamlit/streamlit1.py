# 4. Map (Geospatial Data Visualization)
map_data = pd.DataFrame({
    'lat': [37.76, 37.76, 37.77, 37.78],
    'lon': [-122.4, -122.41, -122.42, -122.43]
})
st.map(map_data)