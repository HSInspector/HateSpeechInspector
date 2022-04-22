import os
import time
# import Test
from flask import Flask, request, jsonify, json
from HSInspector import HSInspector

app = Flask(__name__)


@app.route('/members', methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member2"]}

@app.route('/search/keyword', methods = ['POST'])
def create():
    request_data = json.loads(request.data)
    inspector = HSInspector()
    # print("OPTIONNN SELECTED")
    # print(request_data['option'])
    # js={"tweets":[], "types":[], "username":[]}
    if request_data['option']=='Keyword':
        # print("SEARCHEDDD BY KEYWORDDD")
        js = inspector.searchTweets(request_data['content'])
    elif request_data['option']=="Username":
        js = inspector.searchTweetsByUsername(request_data['content'])
    return js

if __name__ == "__main__":
    app.run(debug=True)