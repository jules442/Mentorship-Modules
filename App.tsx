import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Target, 
  Lightbulb, 
  Compass, 
  Award,
  Users,
  TrendingUp,
  BrainCircuit,
  Footprints,
  ClipboardList,
  MessageCircle,
  Ear,
  Globe,
  Shield,
  Home,
  X,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

// --- Types ---

interface SlideProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

// Module 1 Props
interface VisionBuilderProps extends SlideProps {
  draft: string;
  setDraft: (s: string) => void;
  actionable: string;
  setActionable: (s: string) => void;
  inspiring: string;
  setInspiring: (s: string) => void;
}

interface ActionPlanProps extends SlideProps {
  draft: string;
  actionable: string;
  inspiring: string;
}

// Module 2 Props
interface OpenQuestionProps extends SlideProps {
  q1: string; setQ1: (s: string) => void;
  q2: string; setQ2: (s: string) => void;
  q3: string; setQ3: (s: string) => void;
}

interface SBIProps extends SlideProps {
  pastContext: string;
  setPastContext: (s: string) => void;
  situation: string;
  setSituation: (s: string) => void;
  behavior: string;
  setBehavior: (s: string) => void;
  impact: string;
  setImpact: (s: string) => void;
}

interface ConflictProps extends SlideProps {
  setConflictStyle: (s: string) => void;
  conflictStyle: string;
}

interface CommActionPlanProps extends SlideProps {
  sbi: { s: string; b: string; i: string };
  conflictStyle: string;
  challenge: string;
}

// --- Components ---

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="w-full h-2 bg-gray-200 fixed top-0 left-0 z-50">
      <div 
        className="h-full bg-indigo-luna transition-all duration-500 ease-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// ==========================================
// MODULE 1 SLIDES (Leadership & Vision)
// ==========================================

const M1_WelcomeSlide: React.FC<SlideProps> = ({ onNext }) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in">
    <div className="mb-8">
      <div className="w-24 h-24 rounded-full bg-indigo-luna flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
         <span className="text-4xl">🌿</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-text mb-4">
        Mentorship IL MANAGERS
      </h1>
      <h2 className="text-2xl text-indigo-luna italic">
        Topic 1: Leadership & Vision
      </h2>
    </div>
    <p className="max-w-2xl text-lg text-gray-600 mb-12 leading-relaxed">
      Welcome to your leadership journey at Indigo Luna. <br/><br/>
      This module is designed to help you pause, reflect, and build the foundational skills needed to lead your department effectively.
    </p>
    <button 
      onClick={onNext}
      className="bg-indigo-luna hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
    >
      Begin Journey <ArrowRight size={24} />
    </button>
  </div>
);

const M1_ManagerShiftSlide: React.FC<SlideProps> = ({ onNext, onPrev }) => (
  <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col justify-center h-full">
    <div className="flex items-center gap-4 mb-6">
      <BrainCircuit className="text-indigo-luna" size={40} />
      <h2 className="text-3xl font-bold text-indigo-text">The Manager's Shift</h2>
    </div>
    <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-indigo-luna mb-8">
      <p className="text-xl text-gray-700 italic font-serif leading-relaxed">
        "What got you here won't get you there."
      </p>
    </div>
    <div className="prose prose-lg text-gray-600 mb-8">
      <p className="mb-4">You were likely promoted because you were excellent at <strong>doing</strong> the work. But management is a completely different discipline.</p>
      <p>This module tackles the first hurdle: <strong>Moving from reactive task-management to proactive vision-setting.</strong></p>
    </div>
    <div className="flex justify-between mt-auto">
      <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
      <button onClick={onNext} className="bg-indigo-text text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">Explore Vision <ArrowRight size={20} /></button>
    </div>
  </div>
);

const M1_VisionTheorySlide: React.FC<SlideProps> = ({ onNext, onPrev }) => (
  <div className="max-w-4xl mx-auto px-6 py-8">
    <h2 className="text-3xl font-bold text-indigo-text mb-8 border-b border-indigo-luna/30 pb-4">Vision Provides Direction</h2>
    <p className="text-lg text-gray-600 mb-8">At Indigo Luna, we don't just sell clothes; we sell a philosophy. As a manager, you translate that philosophy into direction.</p>
    <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 h-full">
        <div className="flex items-center gap-3 mb-4"><Compass className="text-indigo-luna" size={32} /><h3 className="text-xl font-semibold">The North Star</h3></div>
        <p className="text-gray-600">Imagine your team is lost in a forest of tasks. A vision is their North Star, helping them prioritize when you aren't there.</p>
      </div>
      <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-luna h-full flex flex-col justify-center">
        <p className="text-gray-700 italic">"A leader without vision is simply managing tasks. A leader with vision inspires action toward a meaningful goal."</p>
      </div>
    </div>
    <div className="mt-8 flex justify-between">
      <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
      <button onClick={onNext} className="bg-indigo-text text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">The Framework <ArrowRight size={20} /></button>
    </div>
  </div>
);

const M1_StartWithWhySlide: React.FC<SlideProps> = ({ onNext, onPrev }) => (
  <div className="max-w-4xl mx-auto px-6 py-8">
    <div className="flex items-center gap-4 mb-6">
      <Lightbulb className="text-indigo-luna" size={40} />
      <h2 className="text-3xl font-bold text-indigo-text">The Golden Circle Framework</h2>
    </div>
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100 p-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4 items-center justify-center relative">
            <div className="w-64 h-64 rounded-full bg-indigo-luna/10 border-2 border-indigo-luna/20 flex items-start justify-center pt-2 relative z-10">
              <span className="font-bold text-indigo-text mt-2">1. WHAT</span>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-indigo-luna/30 border-2 border-indigo-luna/40 flex items-start justify-center pt-2 z-20">
                 <span className="font-bold text-indigo-text mt-2">2. HOW</span>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-indigo-luna flex items-center justify-center text-white text-xl font-bold shadow-xl z-30">3. WHY</div>
              </div>
            </div>
        </div>
        <div>
            <ul className="space-y-4 text-sm md:text-base">
                <li><span className="font-bold text-indigo-luna">1. WHAT (Surface):</span> The result. Every company knows WHAT they do.</li>
                <li><span className="font-bold text-indigo-luna">2. HOW (Process):</span> The strategy. This distinguishes us from others.</li>
                <li><span className="font-bold text-indigo-luna">3. WHY (Core):</span> The cause. This inspires loyalty and passion.</li>
            </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-between">
      <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
      <button onClick={onNext} className="bg-indigo-text text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">Build Your Vision <ArrowRight size={20} /></button>
    </div>
  </div>
);

const M1_VisionBuilderSlide: React.FC<VisionBuilderProps> = ({ onNext, onPrev, draft, setDraft, actionable, setActionable, inspiring, setInspiring }) => {
  const [stage, setStage] = useState(0);
  const handleNextStage = () => { if (stage < 2) setStage(stage + 1); else onNext(); };
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 h-full flex flex-col">
      <div className="mb-6"><h2 className="text-3xl font-bold text-indigo-text">Exercise: Build Your Vision</h2></div>
      <div className="flex-grow bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col gap-6 border border-gray-200">
        <div className="flex items-center mb-4">
          <div className={`flex-1 h-2 rounded-l-full transition-colors ${stage >= 0 ? 'bg-indigo-luna' : 'bg-gray-200'}`}></div>
          <div className={`flex-1 h-2 transition-colors ${stage >= 1 ? 'bg-indigo-luna' : 'bg-gray-200'}`}></div>
          <div className={`flex-1 h-2 rounded-r-full transition-colors ${stage >= 2 ? 'bg-indigo-luna' : 'bg-gray-200'}`}></div>
        </div>
        {stage === 0 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-indigo-text mb-2">Step 1: The WHAT</h3>
            <p className="text-sm text-gray-500 mb-4 bg-gray-50 p-3 rounded"><strong>Prompt:</strong> What is the tangible result or change you want to see in your team in 6 months?</p>
            <textarea 
              className="w-full h-40 p-4 border-2 border-gray-200 rounded-lg focus:ring-indigo-luna text-gray-900 bg-white placeholder-gray-400" 
              value={draft} 
              onChange={(e) => setDraft(e.target.value)} 
              placeholder="e.g., Faster response times..." 
            />
          </div>
        )}
        {stage === 1 && (
          <div className="animate-fade-in">
             <h3 className="text-xl font-bold text-indigo-text mb-2">Step 2: The HOW</h3>
             <p className="text-sm text-gray-500 mb-4 bg-gray-50 p-3 rounded"><strong>Prompt:</strong> How will we achieve this? (Methods, tools, habits)</p>
             <textarea 
               className="w-full h-40 p-4 border-2 border-gray-200 rounded-lg focus:ring-indigo-luna text-gray-900 bg-white placeholder-gray-400" 
               value={actionable} 
               onChange={(e) => setActionable(e.target.value)} 
               placeholder="e.g., Implementing new templates..." 
              />
          </div>
        )}
        {stage === 2 && (
          <div className="animate-fade-in">
             <h3 className="text-xl font-bold text-indigo-text mb-2">Step 3: The WHY</h3>
             <p className="text-sm text-gray-500 mb-4 bg-gray-50 p-3 rounded"><strong>Prompt:</strong> Connect it to the Customer, Team, or Planet. Use words like Empower, Trust, Seamless.</p>
             <textarea 
               className="w-full h-40 p-4 border-2 border-gray-200 rounded-lg focus:ring-indigo-luna text-gray-900 bg-white placeholder-gray-400" 
               value={inspiring} 
               onChange={(e) => setInspiring(e.target.value)} 
               placeholder="e.g., To build a seamless support system that empowers..." 
              />
          </div>
        )}
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={stage === 0 ? onPrev : () => setStage(stage - 1)} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
        <button onClick={handleNextStage} disabled={(stage===0&&!draft)||(stage===1&&!actionable)||(stage===2&&!inspiring)} className="bg-indigo-text disabled:bg-gray-300 text-white px-6 py-3 rounded-lg flex items-center gap-2">{stage === 2 ? 'Finalize' : 'Next'} <ArrowRight size={20} /></button>
      </div>
    </div>
  );
};

const M1_BridgeSlide: React.FC<SlideProps> = ({ onNext, onPrev }) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in max-w-4xl mx-auto">
    <Footprints className="text-indigo-luna mb-6" size={64} />
    <h2 className="text-3xl font-bold text-indigo-text mb-6">Vision is the Dream. <span className="text-indigo-luna">Goals are the Steps.</span></h2>
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-luna text-left max-w-2xl w-full mb-10">
       <p className="text-gray-700">To cross the gap between big ideas and daily chaos, we need a framework that turns abstract ideas into concrete numbers and dates.</p>
    </div>
    <div className="flex justify-between w-full max-w-2xl">
       <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
       <button onClick={onNext} className="bg-indigo-text text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 flex items-center gap-2">Enter The Roadmap <ArrowRight size={20} /></button>
    </div>
  </div>
);

const M1_SmartGoalsSlide: React.FC<SlideProps> = ({ onNext, onPrev }) => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const smartData = [
    { letter: 'S', title: 'Specific', desc: 'Ambiguity is the enemy of execution.', ex: 'Bad: "Improve sales." \nGood: "Increase online accessory sales by 10%."' },
    { letter: 'M', title: 'Measurable', desc: 'If you can\'t measure it, you can\'t manage it.', ex: 'Use numbers: Dollars, Hours, Percentages.' },
    { letter: 'A', title: 'Achievable', desc: 'Stretch your team, but don\'t break them.', ex: 'Ensure you have the budget, staff, and time.' },
    { letter: 'R', title: 'Relevant', desc: 'Does this goal actually help Indigo Luna\'s vision?', ex: 'Don\'t set a goal to organize files if sales are dropping.' },
    { letter: 'T', title: 'Time-bound', desc: 'A goal without a deadline is just a hobby.', ex: 'Set a specific date: "By September 30th".' },
  ];
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="text-center mb-8"><h2 className="text-3xl font-bold text-indigo-text">The S.M.A.R.T. Framework</h2></div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {smartData.map((item) => (
          <button key={item.letter} onClick={() => setActiveLetter(item.letter)} className={`w-14 h-14 rounded-xl text-2xl font-bold transition-all shadow-md ${activeLetter === item.letter ? 'bg-indigo-luna text-white' : 'bg-white text-indigo-text'}`}>{item.letter}</button>
        ))}
      </div>
      <div className="min-h-[220px] bg-white rounded-2xl shadow-lg p-8 border-t-4 border-indigo-luna relative">
        {activeLetter ? smartData.filter(d => d.letter === activeLetter).map(d => (
          <div key={d.letter} className="animate-fade-in">
            <h3 className="text-2xl font-bold text-indigo-text mb-2">{d.letter}: {d.title}</h3>
            <p className="text-lg text-gray-700 mb-4">{d.desc}</p>
            <div className="bg-indigo-50 p-4 rounded-lg"><span className="font-bold text-indigo-luna uppercase text-xs">Example</span><p className="text-gray-800 italic mt-1 whitespace-pre-line">{d.ex}</p></div>
          </div>
        )) : <div className="flex flex-col items-center justify-center h-full text-gray-400 py-8"><Target size={48} /><p>Select a letter</p></div>}
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
        <button onClick={onNext} className="bg-indigo-text text-white px-6 py-3 rounded-lg flex items-center gap-2">Outcome Thinking <ArrowRight size={20} /></button>
      </div>
    </div>
  );
};

const M1_TaskVsResultSlide: React.FC<SlideProps> = ({ onNext, onPrev }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const questions = [
    { id: 1, text: "Spending 2 hours answering emails", type: "Task" },
    { id: 2, text: "Inbox Zero achieved daily", type: "Result" },
    { id: 3, text: "Posting 3 times on Instagram", type: "Task" },
    { id: 4, text: "Growing engagement rate by 5%", type: "Result" },
  ];
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8"><div className="flex items-center gap-3 mb-2"><TrendingUp className="text-indigo-luna" size={32} /><h2 className="text-3xl font-bold text-indigo-text">The "Busy" Trap</h2></div><p className="text-gray-600">Don't confuse activity (Tasks) with productivity (Results).</p></div>
      <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 mb-8 space-y-3">
         {questions.map((q) => (
            <div key={q.id} className="bg-white p-3 rounded-lg shadow-sm flex flex-col md:flex-row justify-between gap-4">
                <p className="font-medium text-gray-800 flex-grow">{q.text}</p>
                <div className="flex gap-2">
                {['Task', 'Result'].map((type) => (
                    <button key={type} onClick={() => !showResult && setAnswers(p => ({ ...p, [q.id]: type }))} className={`px-4 py-2 rounded-full border text-sm ${showResult ? (type === q.type ? "bg-green-100 border-green-500" : "opacity-30") : (answers[q.id] === type ? "bg-indigo-luna text-white" : "bg-white")}`}>{type}</button>
                ))}
                </div>
            </div>
         ))}
      </div>
      <div className="flex justify-between">
        <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
        <button onClick={() => showResult ? onNext() : setShowResult(true)} className="bg-indigo-luna text-white px-6 py-3 rounded-lg shadow-md">{showResult ? "Next: Your Plan" : "Check Answers"}</button>
      </div>
    </div>
  );
};

const M1_ActionPlanSlide: React.FC<ActionPlanProps> = ({ onNext, onPrev, draft, actionable, inspiring }) => (
  <div className="max-w-4xl mx-auto px-6 py-8">
    <div className="flex items-center gap-4 mb-6"><ClipboardList className="text-indigo-luna" size={40} /><h2 className="text-3xl font-bold text-indigo-text">1:1 Prep Checklist</h2></div>
    <div className="bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden p-8">
       <ul className="space-y-6">
         <li className="flex gap-4 items-start">
           <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-luna font-bold flex items-center justify-center shrink-0">1</div>
           <div className="w-full">
             <h4 className="font-bold text-gray-800 text-lg">Drafted Vision</h4>
             <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm space-y-2 mt-2">
                 <div><span className="font-bold text-indigo-luna">WHAT:</span> <span className="italic">{draft || "..."}</span></div>
                 <div><span className="font-bold text-indigo-luna">HOW:</span> <span className="italic">{actionable || "..."}</span></div>
                 <div><span className="font-bold text-indigo-luna">WHY:</span> <span className="italic">{inspiring || "..."}</span></div>
             </div>
           </div>
         </li>
         <li className="flex gap-4 items-start"><div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-luna font-bold flex items-center justify-center shrink-0">2</div><div><h4 className="font-bold text-gray-800 text-lg">Communication Audit</h4><p className="text-gray-600">3 examples of task assignment.</p></div></li>
         <li className="flex gap-4 items-start"><div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-luna font-bold flex items-center justify-center shrink-0">3</div><div><h4 className="font-bold text-gray-800 text-lg">"Busy" Transformation</h4><p className="text-gray-600">One area to shift from Task to Result.</p></div></li>
       </ul>
    </div>
    <div className="flex justify-between mt-8">
      <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
      <button onClick={onNext} className="bg-indigo-text text-white px-6 py-3 rounded-lg shadow-md">Complete Module</button>
    </div>
  </div>
);

const M1_FinalSlide: React.FC<SlideProps> = ({ onPrev }) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-6 animate-slide-up">
    <div className="bg-indigo-luna/10 p-6 rounded-full mb-8"><Award className="text-indigo-luna" size={64} /></div>
    <h1 className="text-4xl font-bold text-indigo-text mb-4">Module 1 Complete!</h1>
    <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 max-w-md w-full mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Next Step</h3>
      <p className="text-gray-600 mb-6">Schedule a meeting with Clara (COS) to review your deliverables.</p>
      <a href="mailto:clara@indigoluna.store?subject=Leadership%20Review" className="block w-full bg-indigo-luna hover:bg-yellow-600 text-white text-center px-6 py-4 rounded-lg font-bold shadow-md flex items-center justify-center gap-2"><Users size={20} /> Schedule with Clara</a>
    </div>
    <button onClick={onPrev} className="text-gray-400 hover:text-gray-600 flex items-center gap-2 text-sm">Review Previous Slides</button>
  </div>
);

// ==========================================
// MODULE 2 SLIDES (Communication Skills)
// ==========================================

const M2_WelcomeSlide: React.FC<SlideProps> = ({ onNext }) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in">
    <div className="mb-8">
      <div className="w-24 h-24 rounded-full bg-indigo-luna flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
           <span className="text-4xl">💬</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-text mb-4">
        Mentorship IL MANAGERS
      </h1>
      <h2 className="text-2xl text-indigo-luna italic">
        Topic 2: Communication Skills
      </h2>
    </div>
    <p className="max-w-2xl text-lg text-gray-600 mb-12 leading-relaxed">
      "Good communication is not just about talking—it's about connecting." <br/>
      It transforms a manager into a leader and a group of individuals into a team.
    </p>
    <button onClick={onNext} className="bg-indigo-luna hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-md flex items-center gap-2">Start Module 2 <ArrowRight size={24} /></button>
  </div>
);

const M2_PillarsSlide: React.FC<SlideProps> = ({ onNext, onPrev }) => (
  <div className="max-w-4xl mx-auto px-6 py-8">
    <div className="flex items-center gap-4 mb-8">
      <MessageCircle className="text-indigo-luna" size={40} />
      <h2 className="text-3xl font-bold text-indigo-text">3 Pillars of Communication</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-luna">
        <Globe className="text-indigo-luna mb-4" size={32} />
        <h3 className="text-xl font-bold text-gray-800 mb-2">Transparency</h3>
        <p className="text-gray-600 text-sm">Open and honest communication builds trust. Share updates, strategy changes, and feedback clearly.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-luna">
        <Ear className="text-indigo-luna mb-4" size={32} />
        <h3 className="text-xl font-bold text-gray-800 mb-2">Active Listening</h3>
        <p className="text-gray-600 text-sm">Create an environment where team members feel heard. Seek input and address concerns regularly.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-luna">
        <Shield className="text-indigo-luna mb-4" size={32} />
        <h3 className="text-xl font-bold text-gray-800 mb-2">Conflict Resolution</h3>
        <p className="text-gray-600 text-sm">Mediate disputes constructively. Resolve conflicts in a way that preserves harmony and trust.</p>
      </div>
    </div>
    <div className="flex justify-between mt-12">
      <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
      <button onClick={onNext} className="bg-indigo-text text-white px-6 py-3 rounded-lg flex items-center gap-2">Dive Deeper <ArrowRight size={20} /></button>
    </div>
  </div>
);

const M2_ListeningSlide: React.FC<SlideProps> = ({ onNext, onPrev }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const quiz = [
    { q: "You are thinking: 'I need to finish that report' while they are talking.", level: 1, explanation: "This is Level 1 (Internal) because the focus is on your own thoughts and to-do list." },
    { q: "You notice that their shoulders are tense and their voice is slightly shaky.", level: 2, explanation: "This is Level 2 (Focused). You are paying attention to their non-verbal cues." },
    { q: "You hear their words clearly and paraphrase them back to confirm understanding.", level: 2, explanation: "This is Level 2 (Focused). You are actively processing their message." },
    { q: "You interrupt them to share a similar story about yourself.", level: 1, explanation: "This is Level 1 (Internal). You are relating their story back to your own experience." },
    { q: "You sense the energy in the room drop after an announcement is made.", level: 3, explanation: "This is Level 3 (Global). You are reading the environment and group dynamics." },
  ];

  const handleAnswer = (level: number) => {
    if (isTransitioning) return;

    const question = quiz[currentQuestion];
    
    if (level === question.level) {
      setFeedback({ type: 'success', text: "Correct! " + question.explanation });
      setIsTransitioning(true);
      
      setTimeout(() => {
        setFeedback(null);
        setIsTransitioning(false);
        setCurrentQuestion(prev => prev + 1);
      }, 2500); 
    } else {
      let hint = "";
      if (level === 1) hint = "Level 1 is self-focused (your thoughts).";
      if (level === 2) hint = "Level 2 is person-focused (their words/body).";
      if (level === 3) hint = "Level 3 is context-focused (the room/energy).";
      
      setFeedback({ type: 'error', text: `Not quite. ${hint} Try again!` });
    }
  };

  const isComplete = currentQuestion >= quiz.length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
          <h2 className="text-3xl font-bold text-indigo-text mb-4">The 3 Levels of Listening</h2>
          <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 mb-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-indigo-text"><Ear size={20}/> Why does this matter?</h3>
              <p className="text-gray-700 leading-relaxed">
                  Most people default to <strong>Level 1 Listening</strong>—simply waiting for their turn to speak. 
                  <br/>
                  Great leadership requires shifting to <strong>Level 2</strong> (truly hearing the person) and <strong>Level 3</strong> (reading the room). 
                  To be effective, you must know which level you are operating in.
              </p>
          </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
           <strong className="text-indigo-luna block mb-1 text-lg">Level 1: Internal</strong>
           <p className="text-sm text-gray-500">Self-focused. Listening to your own inner voice, judgments, and response prep.</p>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
           <strong className="text-indigo-luna block mb-1 text-lg">Level 2: Focused</strong>
           <p className="text-sm text-gray-500">Other-focused. Hearing their words, tone, and body language intently.</p>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
           <strong className="text-indigo-luna block mb-1 text-lg">Level 3: Global</strong>
           <p className="text-sm text-gray-500">Context-focused. Sensing energy, silence, and what isn't being said.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border-t-4 border-indigo-luna shadow-lg min-h-[300px] flex flex-col justify-between">
        {!isComplete ? (
            <>
                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                    <h4 className="font-bold text-gray-800 text-lg">Quiz: Identify the Level ({currentQuestion + 1}/{quiz.length})</h4>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Select One</span>
                </div>
                
                <p className="text-xl text-gray-800 font-medium mb-8 text-center px-4 leading-relaxed">"{quiz[currentQuestion].q}"</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map(lvl => (
                        <button 
                            key={lvl} 
                            onClick={() => handleAnswer(lvl)} 
                            disabled={isTransitioning}
                            className={`py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-sm border ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'} bg-white text-indigo-text border-gray-200 hover:border-indigo-luna`}
                        >
                            Level {lvl}
                        </button>
                    ))}
                </div>

                <div className="h-16 flex items-center justify-center">
                    {feedback && (
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold animate-fade-in ${feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {feedback.type === 'success' ? <CheckCircle size={20}/> : <AlertTriangle size={20}/>}
                            {feedback.text}
                        </div>
                    )}
                </div>
            </>
        ) : (
            <div className="flex flex-col items-center justify-center h-full py-8">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
                 <p className="text-gray-600 mb-8">You have a solid grasp of the 3 Levels of Listening.</p>
                 <button onClick={onNext} className="bg-indigo-luna text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-yellow-600 transition-colors flex items-center gap-2">
                    Continue to Open Questions <ArrowRight size={20}/>
                 </button>
            </div>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
      </div>
    </div>
  );
};

const M2_OpenQuestionsSlide: React.FC<OpenQuestionProps> = ({ onNext, onPrev, q1, setQ1, q2, setQ2, q3, setQ3 }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-indigo-text mb-4">Practice: Open-Ended Questions</h2>
      <p className="text-gray-600 mb-6">Leaders ask questions that invite story, reflection, and problem-solving. Rewrite the following "Closed" questions to be "Open".</p>
      
      <div className="space-y-6">
        
        {/* Q1 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-luna">
            <div className="flex items-center gap-2 mb-3">
                <X className="text-red-400" size={20} />
                <span className="font-bold text-gray-700">Closed: "Did you finish the report?"</span>
            </div>
            <div className="bg-indigo-50 p-3 rounded mb-3 text-sm text-gray-600">
                <span className="font-bold">Hint:</span> Try starting with "What" or "How" to ask about the process or challenges.
            </div>
            <input 
                type="text" 
                value={q1} 
                onChange={e => setQ1(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-luna outline-none text-gray-900 bg-white placeholder-gray-400" 
                placeholder="Rewrite here..."
            />
        </div>

        {/* Q2 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-luna">
            <div className="flex items-center gap-2 mb-3">
                <X className="text-red-400" size={20} />
                <span className="font-bold text-gray-700">Closed: "Do you agree with this plan?"</span>
            </div>
            <input 
                type="text" 
                value={q2} 
                onChange={e => setQ2(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-luna outline-none text-gray-900 bg-white placeholder-gray-400" 
                placeholder="Rewrite here (e.g., What are your thoughts on...)"
            />
        </div>

        {/* Q3 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-luna">
            <div className="flex items-center gap-2 mb-3">
                <X className="text-red-400" size={20} />
                <span className="font-bold text-gray-700">Closed: "Can you work late tonight?"</span>
            </div>
            <input 
                type="text" 
                value={q3} 
                onChange={e => setQ3(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-luna outline-none text-gray-900 bg-white placeholder-gray-400" 
                placeholder="Rewrite here (e.g., What is your capacity looking like...)"
            />
        </div>

      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
        <button 
            onClick={onNext} 
            disabled={!q1 || !q2 || !q3}
            className="bg-indigo-text disabled:bg-gray-300 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
            Next Exercise <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

const M2_SBISlide: React.FC<SBIProps> = ({ onNext, onPrev, pastContext, setPastContext, situation, setSituation, behavior, setBehavior, impact, setImpact }) => {
  const [stage, setStage] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 h-full flex flex-col">
      <h2 className="text-3xl font-bold text-indigo-text mb-2">The SBI Feedback Model</h2>
      <p className="text-gray-600 mb-6">Feedback often fails because it's vague or judgmental. SBI (Situation-Behavior-Impact) strips away the story and sticks to the facts.</p>
      
      {stage === 0 ? (
        <div className="animate-fade-in flex-grow">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-luna mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"><BrainCircuit className="text-indigo-luna"/> Part 1: Reflection</h3>
                <p className="text-gray-600 mb-4">Think of a time recently where you needed to give feedback to a team member (positive or constructive). What happened? How did you deliver it?</p>
                <textarea 
                    className="w-full h-40 p-4 border border-gray-300 rounded focus:ring-indigo-luna outline-none text-gray-900 bg-white placeholder-gray-400" 
                    placeholder="I told them they were doing a good job but needed to focus more..."
                    value={pastContext}
                    onChange={e => setPastContext(e.target.value)}
                />
            </div>
            <div className="flex justify-between mt-auto">
                <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
                <button onClick={() => setStage(1)} className="bg-indigo-text text-white px-6 py-3 rounded-lg flex items-center gap-2">Transform with SBI <ArrowRight size={20} /></button>
            </div>
        </div>
      ) : (
        <div className="animate-fade-in flex-grow flex flex-col">
             <div className="bg-indigo-50 p-4 rounded mb-6 text-sm italic text-gray-600">
                <strong className="block text-indigo-luna not-italic mb-1">Your Scenario:</strong>
                "{pastContext}"
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Part 2: Rewrite using SBI</h3>
            <div className="grid md:grid-cols-3 gap-6 flex-grow">
                <div className="space-y-2">
                    <label className="font-bold text-indigo-luna block">S - Situation</label>
                    <p className="text-xs text-gray-500">When/Where specifically?</p>
                    <textarea 
                        className="w-full h-32 p-3 border rounded focus:ring-indigo-luna text-sm text-gray-900 bg-white placeholder-gray-400" 
                        placeholder="In yesterday's meeting..." 
                        value={situation} 
                        onChange={e => setSituation(e.target.value)} 
                    />
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-indigo-luna block">B - Behavior</label>
                    <p className="text-xs text-gray-500">Observable action (No judgment).</p>
                    <textarea 
                        className="w-full h-32 p-3 border rounded focus:ring-indigo-luna text-sm text-gray-900 bg-white placeholder-gray-400" 
                        placeholder="You interrupted Maria twice..." 
                        value={behavior} 
                        onChange={e => setBehavior(e.target.value)} 
                    />
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-indigo-luna block">I - Impact</label>
                    <p className="text-xs text-gray-500">Effect on you/team.</p>
                    <textarea 
                        className="w-full h-32 p-3 border rounded focus:ring-indigo-luna text-sm text-gray-900 bg-white placeholder-gray-400" 
                        placeholder="It caused the team to shut down..." 
                        value={impact} 
                        onChange={e => setImpact(e.target.value)} 
                    />
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <button onClick={() => setStage(0)} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back to Reflection</button>
                <button onClick={onNext} className="bg-indigo-text text-white px-6 py-3 rounded-lg flex items-center gap-2">Next Topic <ArrowRight size={20} /></button>
            </div>
        </div>
      )}
    </div>
  );
};

const M2_ConflictSlide: React.FC<ConflictProps> = ({ onNext, onPrev, setConflictStyle, conflictStyle }) => {
  const styles = [
      { name: "Avoiding", desc: "Withdrawing or sidestepping.", example: "'I'll deal with it later.'", pros: "Good for trivial issues.", cons: "Issues fester." },
      { name: "Accommodating", desc: "Giving in to maintain harmony.", example: "'Whatever you say is fine.'", pros: "Preserves relationships.", cons: "You get overlooked." },
      { name: "Competing", desc: "Asserting position aggressively.", example: "'My way or the highway.'", pros: "Quick decisions.", cons: "Damages trust." },
      { name: "Compromising", desc: "Finding a middle ground.", example: "'Let's split the difference.'", pros: "Faster than collaboration.", cons: "Suboptimal solutions." },
      { name: "Collaborating", desc: "Win-win solution finding.", example: "'Let's find a way we both win.'", pros: "High quality outcome.", cons: "Time consuming." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-indigo-text mb-4">Conflict Management Styles</h2>
      <p className="text-gray-600 mb-6">Everyone has a default style. <strong>Select the one that best matches your natural tendency</strong> to move forward.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {styles.map(s => (
          <button 
            key={s.name} 
            onClick={() => setConflictStyle(s.name)}
            className={`p-4 rounded-lg border text-left transition-all h-full flex flex-col ${conflictStyle === s.name ? 'bg-indigo-luna text-white ring-4 ring-indigo-luna/30 transform scale-105' : 'bg-white hover:bg-gray-50 border-gray-200'}`}
          >
            <span className="font-bold text-lg mb-1 block">{s.name}</span>
            <span className={`text-xs mb-2 block ${conflictStyle === s.name ? 'text-indigo-100' : 'text-gray-400'}`}>{s.desc}</span>
            <span className={`text-sm italic mb-3 block ${conflictStyle === s.name ? 'text-white' : 'text-gray-600'}`}>{s.example}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button onClick={onPrev} className="text-gray-500 hover:text-indigo-luna flex items-center gap-2"><ArrowLeft size={20} /> Back</button>
        
        <div className="flex items-center gap-4">
             {!conflictStyle && <span className="text-sm text-red-500 animate-pulse font-medium">Please select a style to continue</span>}
             <button 
                onClick={onNext} 
                disabled={!conflictStyle}
                className="bg-indigo-text disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md"
            >
                Final Action Plan <ArrowRight size={20} />
            </button>
        </div>
      </div>
    </div>
  );
};

const M2_ActionPlanSlide: React.FC<CommActionPlanProps> = ({ onNext, onPrev, sbi, conflictStyle, challenge }) => (
  <div className="max-w-4xl mx-auto px-6 py-8">
    <div className="flex items-center gap-4 mb-6"><ClipboardList className="text-indigo-luna" size={40} /><h2 className="text-3xl font-bold text-indigo-text">1:1 Prep Checklist</h2></div>
    <div className="bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden p-8">
       <ul className="space-y-6">
         <li className="flex gap-4 items-start">
           <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-luna font-bold flex items-center justify-center shrink-0">1</div>
           <div className="w-full">
             <h4 className="font-bold text-gray-800 text-lg">Drafted SBI Feedback</h4>
             <p className="text-sm text-gray-500 mb-2">You will practice giving this feedback based on your real scenario.</p>
             <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 border border-gray-200 space-y-2">
                 <p><span className="font-bold text-indigo-luna">S:</span> {sbi.s || "(Pending)"}</p>
                 <p><span className="font-bold text-indigo-luna">B:</span> {sbi.b || "(Pending)"}</p>
                 <p><span className="font-bold text-indigo-luna">I:</span> {sbi.i || "(Pending)"}</p>
             </div>
           </div>
         </li>
         <li className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-luna font-bold flex items-center justify-center shrink-0">2</div>
            <div>
                <h4 className="font-bold text-gray-800 text-lg">Conflict Style Reflection</h4>
                <p className="text-gray-600">My default style is: <span className="font-bold text-indigo-luna">{conflictStyle || "Unselected"}</span>. Be ready to discuss the pros and cons of this style with Clara.</p>
            </div>
         </li>
         <li className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-luna font-bold flex items-center justify-center shrink-0">3</div>
            <div>
                <h4 className="font-bold text-gray-800 text-lg">Upcoming Challenge</h4>
                <p className="text-gray-600">Identify one difficult conversation you need to have this month using these tools.</p>
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

const M2_FinalSlide: React.FC<SlideProps> = ({ onPrev }) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-6 animate-slide-up">
    <div className="bg-indigo-luna/10 p-6 rounded-full mb-8"><Award className="text-indigo-luna" size={64} /></div>
    <h1 className="text-4xl font-bold text-indigo-text mb-4">Module 2 Complete!</h1>
    <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 max-w-md w-full mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Next Step</h3>
      <p className="text-gray-600 mb-6">Schedule a meeting with Clara (COS) to review your SBI draft and conflict styles.</p>
      <a href="mailto:clara@indigoluna.store?subject=Communication%20Skills%20Review" className="block w-full bg-indigo-luna hover:bg-yellow-600 text-white text-center px-6 py-4 rounded-lg font-bold shadow-md flex items-center justify-center gap-2"><Users size={20} /> Schedule with Clara</a>
    </div>
    <button onClick={onPrev} className="text-gray-400 hover:text-gray-600 flex items-center gap-2 text-sm">Review Previous Slides</button>
  </div>
);

// ==========================================
// MAIN APP & DASHBOARD
// ==========================================

const Dashboard = ({ onSelectModule }: { onSelectModule: (m: number) => void }) => (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 animate-fade-in">
        <div className="w-24 h-24 rounded-full bg-indigo-luna flex items-center justify-center mb-8 shadow-xl text-white">
            <span className="text-4xl">🌿</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-text mb-2 font-serif">Indigo Luna</h1>
        <h2 className="text-xl text-gray-500 mb-12 tracking-wide uppercase">Manager Training Portal</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
            <button onClick={() => onSelectModule(1)} className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-indigo-luna transition-all text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-bl-lg">Review</div>
                <BrainCircuit className="text-indigo-luna mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Module 1: Leadership</h3>
                <p className="text-gray-600">Vision setting, Golden Circle, and S.M.A.R.T Goals.</p>
            </button>

            <button onClick={() => onSelectModule(2)} className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-indigo-luna hover:scale-105 transition-all text-left relative overflow-hidden ring-4 ring-indigo-luna/10">
                <div className="absolute top-0 right-0 bg-indigo-luna text-white text-xs font-bold px-3 py-1 rounded-bl-lg">New!</div>
                <MessageCircle className="text-indigo-luna mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Module 2: Communication</h3>
                <p className="text-gray-600">Active listening, SBI Feedback, and Conflict Resolution.</p>
            </button>
        </div>
    </div>
);

const App = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Module 1 State
  const [visionDraft, setVisionDraft] = useState("");
  const [visionActionable, setVisionActionable] = useState("");
  const [visionInspiring, setVisionInspiring] = useState("");

  // Module 2 State
  const [oq1, setOq1] = useState("");
  const [oq2, setOq2] = useState("");
  const [oq3, setOq3] = useState("");
  
  const [sbiPast, setSbiPast] = useState("");
  const [sbiS, setSbiS] = useState("");
  const [sbiB, setSbiB] = useState("");
  const [sbiI, setSbiI] = useState("");
  
  const [conflictStyle, setConflictStyle] = useState("");
  const [commChallenge, setCommChallenge] = useState("");

  const startModule = (m: number) => {
    setActiveModule(m);
    setCurrentStep(0);
    window.scrollTo(0, 0);
  };

  const nextStep = (total: number) => {
    if (currentStep < total - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Build Slides Arrays
  const m1_slides = [
    (p: SlideProps) => <M1_WelcomeSlide {...p} />,
    (p: SlideProps) => <M1_ManagerShiftSlide {...p} />,
    (p: SlideProps) => <M1_VisionTheorySlide {...p} />,
    (p: SlideProps) => <M1_StartWithWhySlide {...p} />,
    (p: SlideProps) => <M1_VisionBuilderSlide {...p} draft={visionDraft} setDraft={setVisionDraft} actionable={visionActionable} setActionable={setVisionActionable} inspiring={visionInspiring} setInspiring={setVisionInspiring} />,
    (p: SlideProps) => <M1_BridgeSlide {...p} />,
    (p: SlideProps) => <M1_SmartGoalsSlide {...p} />,
    (p: SlideProps) => <M1_TaskVsResultSlide {...p} />,
    (p: SlideProps) => <M1_ActionPlanSlide {...p} draft={visionDraft} actionable={visionActionable} inspiring={visionInspiring} />,
    (p: SlideProps) => <M1_FinalSlide {...p} />
  ];

  const m2_slides = [
    (p: SlideProps) => <M2_WelcomeSlide {...p} />,
    (p: SlideProps) => <M2_PillarsSlide {...p} />,
    (p: SlideProps) => <M2_ListeningSlide {...p} />,
    (p: SlideProps) => <M2_OpenQuestionsSlide {...p} q1={oq1} setQ1={setOq1} q2={oq2} setQ2={setOq2} q3={oq3} setQ3={setOq3} />,
    (p: SlideProps) => <M2_SBISlide {...p} pastContext={sbiPast} setPastContext={setSbiPast} situation={sbiS} setSituation={setSbiS} behavior={sbiB} setBehavior={setSbiB} impact={sbiI} setImpact={setSbiI} />,
    (p: SlideProps) => <M2_ConflictSlide {...p} conflictStyle={conflictStyle} setConflictStyle={setConflictStyle} />,
    (p: SlideProps) => <M2_ActionPlanSlide {...p} sbi={{s:sbiS, b:sbiB, i:sbiI}} conflictStyle={conflictStyle} challenge={commChallenge} />,
    (p: SlideProps) => <M2_FinalSlide {...p} />
  ];

  const activeSlides = activeModule === 1 ? m1_slides : m2_slides;

  if (!activeModule) {
    return <Dashboard onSelectModule={startModule} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-gray-800 font-sans">
      <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100 shadow-sm h-16 flex items-center justify-between px-6 transition-all">
         <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveModule(null)}>
            <Home size={20} className="text-gray-400 hover:text-indigo-luna" />
            <div className="text-indigo-luna font-bold text-xl font-serif tracking-widest hidden md:block">INDIGO LUNA</div>
         </div>
         <div className="text-sm text-gray-400 font-medium">
            Module {activeModule} • Step {currentStep} of {activeSlides.length - 1}
         </div>
      </header>
      {currentStep > 0 && currentStep < activeSlides.length - 1 && (
        <div className="fixed top-16 w-full z-40"><ProgressBar current={currentStep} total={activeSlides.length} /></div>
      )}
      <main className="flex-grow pt-24 pb-12 w-full max-w-7xl mx-auto animate-fade-in-up">
        {activeSlides[currentStep] && activeSlides[currentStep]({
          onNext: () => nextStep(activeSlides.length), 
          onPrev: prevStep,
          isFirst: currentStep === 0,
          isLast: currentStep === activeSlides.length - 1
        })}
      </main>
      <footer className="py-6 text-center text-gray-300 text-xs">
        <p>&copy; {new Date().getFullYear()} Indigo Luna Store. Internal Training Module.</p>
      </footer>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
      `}</style>
    </div>
  );
};

export default App;