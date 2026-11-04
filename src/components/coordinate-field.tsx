const nodes=Array.from({length:25*13},(_,i)=>({x:70+(i%25)*61,y:58+Math.floor(i/25)*57,strong:i%19===0}));
const trace=Array.from({length:105},(_,i)=>{const x=50+i*14.35,y=425+Math.sin(i*.09)*74+Math.sin(i*.28)*20;return (i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}).join(" ");
export default function CoordinateField(){
 return <svg className="coordinate-field" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <g className="coordinate-grid" stroke="currentColor" strokeWidth=".7" opacity=".15">
  {Array.from({length:26},(_,i)=><line key={"v"+i} x1={70+i*61} y1="0" x2={70+i*61} y2="800"/>)}
  {Array.from({length:15},(_,i)=><line key={"h"+i} x1="0" y1={58+i*57} x2="1600" y2={58+i*57}/>)}
  </g>
  <g fill="currentColor">{nodes.map((n,i)=><circle key={i} cx={n.x} cy={n.y} r={n.strong?2:.9} opacity={n.strong?.55:.22}/>)}</g>
  <g className="orbit-rings" fill="none" stroke="currentColor" strokeWidth="1" opacity=".3">
   <circle cx="865" cy="385" r="156"/><circle cx="865" cy="385" r="225" strokeDasharray="2 10"/><circle cx="865" cy="385" r="72"/>
  </g>
  <path className="trace-path" d={trace} stroke="currentColor" strokeWidth="1.35" fill="none" opacity=".65"/>
  <path d="M0 385 L1600 385 M865 0 L865 800" stroke="currentColor" strokeWidth=".75" strokeDasharray="2 10" opacity=".35"/>
  <circle className="origin-pulse" cx="865" cy="385" r="3" fill="currentColor"/>
 </svg>
}