import json
import sys
import psycopg2

def parse_json(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    return data

def connect_to_db():
    conn = psycopg2.connect(
        host="your_host",
        database="your_database",
        user="your_user",
        password="your_password"
    )
    return conn

# Insert function for admin table
def insert_admin_data(conn, data):
    try:
        cur = conn.cursor()
        query = "INSERT INTO admin (id, userid, accesslevel) VALUES (%s, %s, %s)"
        cur.execute(query, data)
        conn.commit()
    except psycopg2.Error as e:
        print(f"Error inserting data into admin table: {e}")
        conn.rollback()

# Insert function for category table
def insert_category_data(conn, data):
    try:
        cur = conn.cursor()
        query = "INSERT INTO category (id, productid, title, metatitle, slug, content) VALUES (%s, %s, %s, %s, %s, %s)"
        cur.execute(query, data)
        conn.commit()
    except psycopg2.Error as e:
        print(f"Error inserting data into category table: {e}")
        conn.rollback()

# Insert function for inventory table
def insert_inventory_data(conn, data):
    try:
        cur = conn.cursor()
        query = "INSERT INTO inventory (id, productid, quantity) VALUES (%s, %s, %s)"
        cur.execute(query, data)
        conn.commit()
    except psycopg2.Error as e:
        print(f"Error inserting data into inventory table: {e}")
        conn.rollback()

# Insert function for orderitem table
def insert_orderitem_data(conn, data):
    try:
        cur = conn.cursor()
        query = "INSERT INTO orderitem (id, orderid, productid, quantity) VALUES (%s, %s, %s, %s)"
        cur.execute(query, data)
        conn.commit()
    except psycopg2.Error as e:
        print(f"Error inserting data into orderitem table: {e}")
        conn.rollback()

# Insert function for orders table
def insert_orders_data(conn, data):
    try:
        cur = conn.cursor()
        query = "INSERT INTO orders (id, userid, type, status, subtotal, metaproductdiscount, tax, shipping, total, promo, discount, grandtotal, createdat) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        cur.execute(query, data)
        conn.commit()
    except psycopg2.Error as e:
        print(f"Error inserting data into orders table: {e}")
        conn.rollback()

# Insert function for product table
def insert_product_data(conn, data):
    try:
        cur = conn.cursor()
        query = "INSERT INTO product (id, supplierid, orderid, title, summary, type, sku, createdat, updatedat, content) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        cur.execute(query, data)
        conn.commit()
    except psycopg2.Error as e:
        print(f"Error inserting data into product table: {e}")
        conn.rollback()

# Insert function for role table
def insert_role_data(conn, data):
    try:
        cur = conn.cursor()
        query = "INSERT INTO role (id, name) VALUES (%s, %s)"
        cur.execute(query, data)
        conn.commit()
    except psycopg2.Error as e:
        print(f"Error inserting data into role table: {e}")
        conn.rollback()

# Insert function for supplier table
def insert_supplier_data(conn, data):
    try:
        cur = conn.cursor()
        query = "INSERT INTO supplier (id, name, contact, address) VALUES (%s, %s, %s, %s)"
        cur.execute(query, data)
        conn.commit()
    except psycopg2.Error as e:
        print(f"Error inserting data into supplier table: {e}")
        conn.rollback()

# Insert function for users table
def insert_users_data(conn, data):
    try:
        cur = conn.cursor()
        query = "INSERT INTO users (id, roleid, firstname, lastname, username, mobile, email, passwordhash, registeredat) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        cur.execute(query, data)
        conn.commit()
    except psycopg2.Error as e:
        print(f"Error inserting data into users table: {e}")
        conn.rollback()

# Define a dictionary that maps table names to insert functions
insert_functions = {
    'admin': insert_admin_data,
    'category': insert_category_data,
    'inventory': insert_inventory_data,
    'orderitem': insert_orderitem_data,
    'orders': insert_orders_data,
    'product': insert_product_data,
    'role': insert_role_data,
    'supplier': insert_supplier_data,
    'users': insert_users_data
}


if __name__ == "__main__":
    json_file_path = sys.argv[1]
    parsed_data = parse_json(json_file_path)
    conn = connect_to_db()
    for row in parsed_data:
        table_name = row.pop('table_name')
        # Look up the insert function for this table
        insert_func = insert_functions.get(table_name)
        if insert_func is not None:
            # Call the insert function
            insert_func(conn, row)
        else:
            print(f"No insert function found for table '{table_name}'")
    conn.close()