# Flask Best Practices and Rules

## Core Rules for Junior Developers

### 1. Always Use Application Factory Pattern

```python
# ❌ BAD: Global Flask instance
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello'

# ✅ GOOD: Using application factory
from flask import Flask

def create_app():
    app = Flask(__name__)

    # Register blueprints
    from .views import main_bp
    app.register_blueprint(main_bp)

    # Configure app
    app.config.from_object('config.DevelopmentConfig')

    return app
```

### 2. Use Blueprints for Route Organization

```python
# ❌ BAD: All routes in main app file
from flask import Flask

app = Flask(__name__)

@app.route('/users')
def users():
    return 'Users'

@app.route('/products')
def products():
    return 'Products'

# ✅ GOOD: Routes organized in blueprints
from flask import Blueprint

users_bp = Blueprint('users', __name__)
products_bp = Blueprint('products', __name__)

@users_bp.route('/')
def users():
    return 'Users'

@products_bp.route('/')
def products():
    return 'Products'
```

### 3. Always Validate and Sanitize Input Data

```python
# ❌ BAD: No input validation
from flask import request

@app.route('/user', methods=['POST'])
def create_user():
    name = request.form['name']
    age = request.form['age']
    return f"Created user {name}"

# ✅ GOOD: Using proper validation
from flask import request, abort
from marshmallow import Schema, fields, ValidationError

class UserSchema(Schema):
    name = fields.Str(required=True)
    age = fields.Int(required=True, validate=lambda n: n > 0)

@app.route('/user', methods=['POST'])
def create_user():
    schema = UserSchema()
    try:
        data = schema.load(request.form)
        return f"Created user {data['name']}"
    except ValidationError as err:
        abort(400, description=str(err.messages))
```

## Additional Tips

1. **Security Best Practices**

   - Always use HTTPS in production
   - Set secure session cookies
   - Use CSRF protection for forms
   - Never store sensitive data in plain text

2. **Error Handling**

   - Use custom error handlers
   - Log errors appropriately
   - Return proper HTTP status codes
   - Provide meaningful error messages

3. **Configuration Management**

   - Use environment variables for sensitive data
   - Separate config for different environments
   - Don't commit secrets to version control
   - Use config classes instead of dictionaries

4. **Common Pitfalls to Avoid**
   - Don't use Flask's development server in production
   - Don't store user sessions in the cookie without encryption
   - Don't forget to handle CORS if needed
   - Don't expose stack traces in production

## Example Configuration Structure

```python
# config.py
class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'hard-to-guess-string'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///dev.db'

class ProductionConfig(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
```
