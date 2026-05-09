import Button from '@/components/commons/Button.jsx';

export default function UserInfo() {
  return (
    <div className="max-w-61 py-5 space-y-3">
      <div className="flex">
        <div className="flex justify-center items-center w-30 h-30 rounded-full shrink-0 object-cover bg-base-200 shadow-md shadow-base-300">
          프로필
        </div>
        <div className="flex flex-col justify-center y-full pl-4 gap-1.5">
          <h3 className="font-medium whitespace-nowrap overflow-visible">
            고양이에옹
          </h3>
          <p className="text-neutral">만 2세 · 여자</p>
        </div>
      </div>
      <>
        <small className="text-neutral">이번달 복용률</small>
        <div className="w-full h-3 bg-base-300 text rounded-full overflow-hidden">
          <div className={`w-[70%] bg-info`}>.</div>
        </div>
      </>
      <div className="flex gap-2.5 w-full">
        <Button size="sm" fullWidth>
          약 추가
        </Button>
        <Button size="sm" variant="secondary" fullWidth>
          약 관리
        </Button>
      </div>
    </div>
  );
}
