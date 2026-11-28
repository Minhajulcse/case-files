import { Check, Circle, GitBranch } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { reviewInquiries } from '../../utils/deductionEngine';

export function InquiryList({ citations }: { citations?: string[] }) {
  const { activeCase, caseState, getLoc, language } = useGame();
  if (!activeCase || !caseState) return null;
  const bn = language === 'bn';
  return <section className="inquiries">
    <h3>
      <GitBranch size={16} />
      {bn ? 'তদন্তের প্রশ্ন' : 'Lines of inquiry'}
    </h3>

    <p>
      {bn ? 'প্রতিটি প্রশ্নে সংশ্লিষ্ট দুটি উপাদান বোর্ডে যুক্ত করুন। অভিযোগে সহায়ক নথিও উদ্ধৃত করুন।' : 'Link the two records that answer each question on the board. Cite the supporting exhibits in your report.'}
    </p>

    {reviewInquiries(activeCase, caseState, citations).map(({ inquiry, available, linked, cited }) => <div key={inquiry.id} className={available && linked ? 'supported' : ''}>

      {available && linked ? <Check size={15} /> : <Circle size={13} />}
      <span>
        {getLoc(inquiry.question)}
        <small>
          {!available ? (bn ? 'আলামত খুঁজুন' : 'Gather supporting exhibits') : !linked ? (bn ? 'তুলনার জন্য প্রস্তুত' : 'Ready to compare') : citations && !cited ? (bn ? 'সহায়ক নথি উদ্ধৃত করুন' : 'Cite supporting exhibits') : (bn ? 'সংযোগ নথিভুক্ত' : 'Connection documented')}
        </small>

        {linked && available && <details>
          <summary>{bn ? 'সহায়ক আলামত' : 'Supporting exhibits'}</summary>

          <ul>{inquiry.evidenceIds.map(id => <li key={id}>{getLoc(activeCase.evidence.find(e => e.id === id)?.name)}</li>)}</ul>
        </details>}

      </span>

    </div>)}
  </section>;
}
