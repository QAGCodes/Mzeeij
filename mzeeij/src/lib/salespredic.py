import sys
import json
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from dateutil.parser import parse

data = json.load(sys.stdin)
#TODO: CONVERT DATAFRAME FORMAT to {date, prediction, actual}


# Convert data to DataFrame
salesdf = pd.DataFrame(data)

# Convert dates to numerical values
salesdf['createdat'] = salesdf['createdat'].apply(lambda x: parse(x).timestamp())

# Convert count to integer
salesdf['count'] = salesdf['count'].astype(int)

# Split data into features (X) and target (y)
X = salesdf[['createdat']]
y = salesdf['count']

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
#print(f'Mean Squared Error: {mse}')

# Create a DataFrame with fields date, prediction, actual
#datafinal = pd.DataFrame(columns=['date', 'prediction', 'actual'])

# Append salesdf to datafinal
datafinal = salesdf.rename(columns={'createdat': 'date', 'count': 'actual'})
datafinal['prediction'] = -1

# Predict the count for the next three months
# This requires the createdat for the next three months
# For example:
next_three_months = pd.DataFrame({
    'createdat': ['2024-02-01T00:00:00Z', '2024-03-01T00:00:00Z', '2024-04-01T00:00:00Z']
})
next_three_months['createdat'] = next_three_months['createdat'].apply(lambda x: parse(x).timestamp())
predictions = model.predict(next_three_months)

# Create a DataFrame for the next three months
next_three_months_df = pd.DataFrame({
    'date': ['2024-02-01T00:00:00Z', '2024-03-01T00:00:00Z', '2024-04-01T00:00:00Z'],
    'prediction': predictions,  # Use the predicted values
    'actual': -1  # Placeholder value
})

# Convert the 'date' column to timestamps
next_three_months_df['date'] = next_three_months_df['date'].apply(lambda x: parse(x).timestamp())

# Append next_three_months_df to datafinal
datafinal = datafinal.append(next_three_months_df, ignore_index=True)

print(datafinal.to_json(orient='records'))


