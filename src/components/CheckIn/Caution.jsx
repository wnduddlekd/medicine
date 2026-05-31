import { AlertCircle } from 'lucide-react';

export default function Caution() {
  return (
    <div className="card-base">
      <p className="font-bold flex items-center gap-1 mb-3">
        <AlertCircle size={16} /> 주의사항
      </p>
      <textarea
        className="w-full h-32 bg-base-100 rounded-lg p-3 outline-none resize-none border border-base-300 focus:border-primary transition-colors"
        placeholder="내용을 입력해주세요"
      />
    </div>
  );
}
