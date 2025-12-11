import React from 'react';
import { ClipboardList, ArrowLeft } from 'lucide-react';

interface ActionPlanProps {
  onNext: () => void;
  onPrev: () => void;
  draft: string;
  actionable: string;
  inspiring: string;
}

const M1_ActionPlanSlide: React.FC<ActionPlanProps> = ({ onNext, onPrev, draft, actionable, inspiring }) => (
  <div className="max-w-4xl mx-auto px-6 py-8">
    <div className="flex items-center gap-4 mb-6"><ClipboardList className="text-indigo-luna" size={40} /><h2 className="text-3xl font-bold text-indigo-text">1:1 Prep Checklist</h2></div>
    
    <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 mb-8">
        <h4 className="font-bold text-indigo-text mb-2">What happens next?</h4>
        <p className="text-gray-700 leading-relaxed">
            You have completed the learning materials for this module. Your next step is a scheduled 1:1 catch-up with Clara (COS). 
            This session is not a test, but a collaborative space to refine your leadership vision and set concrete goals. 
            <br/><br/>
            <strong>Please bring the following deliverables to your meeting:</strong>
        </p>
    </div>

    <div className="bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden p-8">
       <ul className="space-y-6">
         <li className="flex gap-4 items-start">
           <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-luna font-bold flex items-center justify-center shrink-0">1</div>
           <div className="w-full">
             <h4 className="font-bold text-gray-800 text-lg">Drafted Vision</h4>
             <p className="text-sm text-gray-500 mb-2">Here is your drafted vision. Can you improve on this before your session?</p>
             <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm space-y-2 mt-2">
                 <div><span className="font-bold text-indigo-luna">WHAT:</span> <span className="italic">{draft || "..."}</span></div>
                 <div><span className="font-bold text-indigo-luna">HOW:</span> <span className="italic">{actionable || "..."}</span></div>
                 <div><span className="font-bold text-indigo-luna">WHY:</span> <span className="italic">{inspiring || "..."}</span></div>
             </div>
           </div>
         </li>
         <li className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-luna font-bold flex items-center justify-center shrink-0">2</div>
            <div>
                <h4 className="font-bold text-gray-800 text-lg">Communication Audit</h4>
                <p className="text-gray-600">Bring 3 examples of task assignment you have given to your team this week.</p>
            </div>
         </li>
         <li className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-luna font-bold flex items-center justify-center shrink-0">3</div>
            <div>
                <h4 className="font-bold text-gray-800 text-lg">"Busy" Transformation</h4>
                <p className="text-gray-600">Describe one area in your department that should shift from task to result and why?</p>
            </div>
         </li>
       </ul>
    </div>
    <div className="flex justify-between mt-8">
      <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
      <button onClick={onNext} className="bg-indigo-text text-white px-6 py-3 rounded-lg shadow-md">Complete Module</button>
    </div>
  </div>
);

const App: React.FC = () => {
    return (
        <M1_ActionPlanSlide 
            onNext={() => console.log("Next clicked")}
            onPrev={() => console.log("Prev clicked")}
            draft="Sample Draft Vision"
            actionable="Sample Actionable Steps"
            inspiring="Sample Inspiring Goal"
        />
    );
};

export default App;