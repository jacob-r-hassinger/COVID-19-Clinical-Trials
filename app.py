import sqlalchemy as db
from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/dashboard")
def index():
    engine = db.create_engine('sqlite:///COVID-Clinical-Trials.sqlite')
    #metadata = db.MetaData()
    connection = engine.connect()
    query = connection.execute("SELECT DISTINCT c.nctid, c.brieftitle, c.facility, c.briefsummary, c.overallstatus, c.leadsponsor, c.contactname, c.contactphone, c.contactemail, c.enrollmentcount, c.locationstate, l.latitude, l.longitude, p.phase FROM COVID_ClinicalTrials as c INNER JOIN lat_long as l on c.locationzip = l.locationzip INNER JOIN Phase_Recordings as p on c.nctid = p.nctid")
    plotquery = connection.execute("SELECT c.locationcountry, count(c.locationcountry) as count FROM COVID_ClinicalTrials as c GROUP BY c.locationcountry ORDER BY count DESC")
    plotquery2 = connection.execute("SELECT p.phase, count(p.phase) as count FROM Phase_Recordings as p GROUP BY p.phase ORDER BY p.phase")

    querylist = [query, plotquery, plotquery2]
    sourcedata = []

    for queryitem in querylist:
        d, results = {}, []
        for rowproxy in queryitem:
            # rowproxy.items() returns an array like [(key0, value0), (key1, value1)] > thank you stackoverflow!
            for column, value in rowproxy.items():
                # build up the dictionary
                d = {**d, **{column: value}}
            results.append(d)
        sourcedata.append(results)
    connection.close()

    return render_template("clinicaltrials.html", data=sourcedata)

@app.route("/about-us")
def about():
    return render_template('aboutus.html')

@app.route("/machine-learning")
def machinelearning():
    return render_template('machinelearning.html')

@app.route("/our-project")
def ourproject():
    return render_template('ourproject.html')

if __name__ == "__main__":
    app.run(debug=True)
