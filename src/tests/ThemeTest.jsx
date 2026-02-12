export default function ThemeTest() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'pillLight' ? 'pillDark' : 'pillLight';
    html.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {/* 테마 전환 버튼 */}
      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleTheme} className="btn btn-primary">
          🌓 테마 전환
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">💊 약 복용 기록 앱</h1>

        {/* 버튼 색상 */}
        <Card title="버튼 색상">
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-primary">복용 기록하기</button>
            <button className="btn btn-secondary">약 추가하기</button>
            <button className="btn btn-accent">완료됨</button>
          </div>
        </Card>

        {/* 상태 버튼 */}
        <Card title="상태 버튼">
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-success">성공</button>
            <button className="btn btn-warning">경고</button>
            <button className="btn btn-error">오류</button>
          </div>
        </Card>

        {/* 상태 배지 */}
        <Card title="상태 표시">
          <div className="flex gap-2 flex-wrap">
            <span className="badge badge-success">✓ 복용 완료</span>
            <span className="badge badge-warning">⏰ 복용 예정</span>
            <span className="badge badge-error">✗ 미복용</span>
            <span className="badge badge-info">ℹ 알림 설정됨</span>
          </div>
        </Card>

        {/* 약 목록 예시 */}
        <Card title="오늘의 복용 목록">
          <PillItem
            name="비타민 D"
            time="아침 8:00"
            status="completed"
            badgeText="완료"
          />
          <PillItem
            name="혈압약"
            time="점심 12:00"
            status="pending"
            badgeText="예정"
          />
          <PillItem
            name="소화제"
            time="저녁 6:00"
            status="missed"
            badgeText="미복용"
          />
        </Card>

        {/* 색상 팔레트 */}
        <Card title="색상 팔레트">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <ColorBox color="primary" label="Primary" />
            <ColorBox color="secondary" label="Secondary" />
            <ColorBox color="accent" label="Accent" />
            <ColorBox color="success" label="Success" />
            <ColorBox color="warning" label="Warning" />
            <ColorBox color="error" label="Error" />
          </div>
        </Card>

        {/* 호버 색상 팔레트 */}
        <Card title="호버 색상 (Hover)">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <ColorBox color="primary-focus" label="Primary Focus" />
            <ColorBox color="secondary-focus" label="Secondary Focus" />
            <ColorBox color="accent-focus" label="Accent Focus" />
            <ColorBox color="success-focus" label="Success Focus" />
            <ColorBox color="warning-focus" label="Warning Focus" />
            <ColorBox color="error-focus" label="Error Focus" />
          </div>
        </Card>

        {/* 배경 색상 */}
        <Card title="배경 색상">
          <div className="grid grid-cols-3 gap-4">
            <BaseBox level="100" label="Base 100" />
            <BaseBox level="200" label="Base 200" />
            <BaseBox level="300" label="Base 300" />
          </div>
        </Card>
      </div>
    </div>
  );
}

// Card 컴포넌트
function Card({ title, children }) {
  return (
    <div className="bg-base-200 rounded-2xl p-6 mb-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

// ColorBox 컴포넌트
function ColorBox({ color, label }) {
  return (
    <div>
      <div
        className="h-16 rounded-lg mb-2"
        style={{ backgroundColor: `var(--${color})` }}
      />
      <p className="text-sm font-semibold">{label}</p>
    </div>
  );
}

// BaseBox 컴포넌트
function BaseBox({ level, label }) {
  return (
    <div>
      <div
        className="h-16 rounded-lg mb-2 border border-base-300"
        style={{ backgroundColor: `var(--base-${level})` }}
      />
      <p className="text-sm">{label}</p>
    </div>
  );
}

// PillItem 컴포넌트
function PillItem({ name, time, status, badgeText }) {
  const statusClass = {
    completed: 'completed',
    pending: 'pending',
    missed: 'missed',
  }[status];

  const badgeClass = {
    completed: 'badge-success',
    pending: 'badge-warning',
    missed: 'badge-error',
  }[status];

  return (
    <div className={`pill-item ${statusClass} mb-3`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="pill-name">{name}</h3>
          <p className="pill-time">{time}</p>
        </div>
        <span className={`badge ${badgeClass}`}>{badgeText}</span>
      </div>
    </div>
  );
}
