from fastapi import FastAPI
from pydantic import BaseModel
import joblib,os,re
app=FastAPI(title='Support Ticket ML Service')
model=None
try:model=joblib.load('model/category.joblib')
except:pass
class Ticket(BaseModel): subject:str; description:str
@app.get('/health')
def health(): return {'ok':True}
@app.post('/predict')
def predict(t:Ticket):
 text=re.sub(r'[^a-z0-9 ]',' ',(t.subject+' '+t.description).lower())
 if model:
  v,m=model; p=m.predict(v.transform([text]))[0]; probs=m.predict_proba(v.transform([text]))[0]; conf=float(max(probs))
 else:p='General';conf=.5
 priority='Critical' if any(x in text for x in ['critical','urgent','security','down']) else ('High' if any(x in text for x in ['cannot','failed','error']) else 'Medium')
 return {'category':p,'priority':priority,'confidence':round(conf,3)}
