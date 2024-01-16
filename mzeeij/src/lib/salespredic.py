import sys
import json
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from dateutil.parser import parse

data = json.load(sys.stdin)


# Convert data to DataFrame
df = pd.DataFrame(data)

# Convert dates to numerical values
df['createdat'] = df['createdat'].apply(lambda x: parse(x).timestamp())

# Convert count to integer
df['count'] = df['count'].astype(int)

# Split data into features (X) and target (y)
X = df[['createdat']]
y = df['count']

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')

# Predict the count for the next three months
# This requires the createdat for the next three months
# For example:
next_three_months = pd.DataFrame({
    'createdat': ['2024-02-01T00:00:00Z', '2024-03-01T00:00:00Z', '2024-04-01T00:00:00Z']
})
next_three_months['createdat'] = next_three_months['createdat'].apply(lambda x: parse(x).timestamp())
predictions = model.predict(next_three_months)
print(f'Predictions for the next three months: {predictions}')