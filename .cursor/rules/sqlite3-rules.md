# SQLite3 Best Practices and Rules

## Core Rules for Junior Developers

### 1. Always Manage Database Connections Properly

```python
# ❌ BAD: Connection left open
conn = sqlite3.connect('database.db')
cursor = conn.execute('SELECT * FROM users')
# Connection never closed!

# ✅ GOOD: Using context manager
with sqlite3.connect('database.db') as conn:
    cursor = conn.execute('SELECT * FROM users')
    # Connection automatically closed
```

### 2. Use Parameterized Queries for Safety

```python:.cursor/rules/sqlite3.mdc
# ❌ DANGEROUS: SQL Injection vulnerability
username = user_input
cursor.execute(f"SELECT * FROM users WHERE username = '{username}'")

# ✅ SAFE: Using parameterized queries
cursor.execute("SELECT * FROM users WHERE username = ?", (username,))

# ✅ ALSO SAFE: Using named parameters
cursor.execute("SELECT * FROM users WHERE username = :username",
              {"username": username})
```

### 3. Always Commit Write Operations

```python:.cursor/rules/sqlite3.mdc
# ❌ BAD: Changes not saved
conn = sqlite3.connect('database.db')
cursor.execute("INSERT INTO users (name) VALUES (?)", ("Alice",))
conn.close()  # Data not committed!

# ✅ GOOD: Proper transaction handling
with sqlite3.connect('database.db') as conn:
    try:
        conn.execute("BEGIN TRANSACTION")
        conn.execute("INSERT INTO users (name) VALUES (?)", ("Alice",))
        conn.execute("UPDATE user_count SET count = count + 1")
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise e
```

## Additional Best Practices

1. **Error Handling**

   - Always wrap database operations in try-except blocks
   - Implement proper rollback mechanisms for transactions
   - Log database errors appropriately

2. **Performance Considerations**

   - Use indexes for frequently queried columns
   - Keep transactions as short as possible
   - Use batch operations for multiple inserts
   - Consider using `executemany()` for bulk operations

3. **Security**

   - Never store sensitive data in plaintext
   - Keep your database file in a secure location
   - Set appropriate file permissions
   - Regular backups are essential

4. **Limitations to Remember**
   - SQLite is not designed for high concurrency
   - Best suited for local storage or small to medium applications
   - Not recommended for high-write scenarios with multiple users

## When to Use SQLite

SQLite is ideal for:

- Development/testing environments
- Embedded applications
- Single-user applications
- Small to medium-sized websites
- Local data storage
- Prototypes and demos

Consider alternatives (PostgreSQL, MySQL) for:

- High-concurrency applications
- Large-scale web applications
- Applications requiring advanced database features
