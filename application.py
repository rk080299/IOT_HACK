import os
import re
from flask import Flask, render_template, request, redirect, url_for


app = Flask(__name__)


@app.route("/")
def index():
	"""Render map"""
	return render_template('index.html')

@app.route("/login", methods=['GET','POST'])
def login():
	error = None
	if request.method =='POST':
		if request.form['username']!= 'admin' or request.form['password']!= 'admin':
			error = 'Invalid credentials, Please try again.'
		else:
			return redirect(url_for('index'))
	return render_template('login2.html', error=error)
