
from flask import Flask, request, render_template_string

app = Flask(__name__)

html = """
<html>
    <body>
        <h1>Form Input</h1>
        <form action="/" method="post">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br>
            <label for="age">Age:</label><br>
            <input type="number" id="age" name="age" required><br>
            <input type="submit" value="Submit">
        </form>
        {% if name %}
            <p>Name: {{ name }}</p>
            <p>Age: {{ age }}</p>
        {% endif %}
    </body>
</html>
"""

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        age = request.form.get('age')
        return render_template_string(html, name=name, age=age)
    return render_template_string(html)

if __name__ == '__main__':
    app.run(debug=True)