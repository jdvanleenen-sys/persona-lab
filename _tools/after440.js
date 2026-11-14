// Amendment 27 bars. Use: node testing/after440.js testing/transcripts/<run>. Bars on replies after her "one minute" line.
const fs=require('fs'),path=require('path');const D=process.argv[2];
let allOk=true;
for(const f of fs.readdirSync(D).filter(x=>/^T\d+_r\d+\.json$/.test(x))){
  const j=JSON.parse(fs.readFileSync(path.join(D,f)));
  const reps=j.turns.filter(t=>t.role!=='teacher').map(t=>t.text??t.meredith??t.reply);
  const i=reps.findIndex(r=>/one minute/i.test(r));
  const post=i<0?[]:reps.slice(i+1,-1); // drop the debrief
  const tail=r=>r.toLowerCase().replace(/[^a-z' ]/g,'').trim().split(/\s+/).slice(-5).join(' ');
  let rep=0;for(let k=1;k<post.length;k++) if(tail(post[k])===tail(post[k-1])) rep++;
  const pr=post.filter(r=>/principal/i.test(r)).length;
  const terms=post.filter(r=>/\bzero\b|in writing|record/i.test(r)).length;
  const ok=i>=0&&rep===0&&pr<=2&&terms<=post.length/2; allOk&&=ok;
  console.log(`${f} oneMinuteAtReply=${i+1} post=${post.length} sameTail=${rep} principal=${pr} terms=${terms} ${ok?'PASS':'FAIL'}`);
  post.forEach(r=>console.log('   | '+r));
}
console.log(allOk?'ALL PASS':'NOT MET');
